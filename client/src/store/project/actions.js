function populateProject(userdb, project) {
  project.actors.forEach((actor) => {
    const actorAddress = actor;
    actor = userdb.query((a) => a.address === actorAddress)[0];
  });
}

export async function loadProjectsByUserAddress(state, userAddress) {
  const params = { userAddress };
  const res = await this._vm.$axios.get(`projects`, { params });
  const projects = res.data;
  if (res.data.length > 0) await this._vm.$db.user.load();
  projects.forEach((p) => populateProject(this._vm.$db.user, p));
  state.commit('setProjects', projects);
}

export async function loadProject(state, projectId) {
  const res = await this._vm.$axios.get(`projects/${projectId}`);
  const project = res.data;
  await this._vm.$db.user.load();
  populateProject(this._vm.$db.user, project);
  state.commit('setProject', res.data);
}

export async function addActor(state, actorAddress) {
  await this._vm.$db.user.load();
  const actors = this._vm.$db.user.query((a) => a.address === actorAddress);
  if (actors.length <= 0) throw new Error('Actor not found');
  const res = await this._vm.$axios.post(
    `projects/${state.state.project._id}/addActor`,
    {
      actorAddress,
    }
  );
  const project = res.data;
  populateProject(this._vm.$db.user, project);
  state.commit('setProject', project);
  return project;
}

export async function addProject(state, { project, container }) {
  // add project
  await this._vm.$db.user.load();
  const actors = this._vm.$db.user.query(
    (a) => a.address === project.actors[0]
  );
  if (actors.length <= 0) {
    throw new Error('Actor not found');
  }
  const res = await this._vm.$axios.post(`projects`, project);
  project = res.data;
  populateProject(this._vm.$db.user, project);

  // add services
  const services = await this._vm.$db.container.add(project._id, container);

  // create agreement
  const agreement = {
    services: container.boqs[0].roots,
    client: project.actors[0],
    contractor: project.actors[1],
    createdAt: new Date().toJSON(),
  };
  this._vm.$db.agreement.addProject(services, agreement);
  console.log('created agreement');

  // update store
  state.commit('addProject', project);
  return project;
}
