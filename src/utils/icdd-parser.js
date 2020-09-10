import xml2js from 'xml2js';
import * as _ from 'lodash';
import Web3 from 'web3';

// transform all attribute and tag names and values to uppercase
const nameProcessor = (name) =>
  name
    .match(
      /BoQ|[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )
    .map((x) => x.toLowerCase())
    .join('_');

const parserOptions = {
  tagNameProcessors: [nameProcessor],
  attrNameProcessors: [nameProcessor],
  explicitArray: false,
  async: true,
};

class BoQ {
  static build(json) {
    const parse = (node, parent) => {
      node.id = node.$.id;
      node.hash = Web3.utils.sha3(node.id);
      if (parent) node.parent = parent;
      delete node.$;
      if (!node.boq_body) {
        // no body -> no children. End of recursion returns node
        return;
      }
      if (node.boq_body.boq_ctgy) {
        node.children = node.boq_body.boq_ctgy;
        delete node.boq_body.boq_ctgy;
        node.children.forEach((ctgy) => parse(ctgy, node.hash));
      } else {
        if (Array.isArray(node.boq_body.itemlist.item)) {
          node.children = node.boq_body.itemlist.item;
          node.children.forEach((ctgy) => parse(ctgy, node.hash));
        } else {
          node.children = [parse(node.boq_body.itemlist.item, node.hash)];
        }
        delete node.boq_body.itemlist;
        return node;
      }
    };
    const boq = json.gaeb.award.boq;
    parse(boq, 0);
    return boq;
  }
}

class BillingModel {
  static build(json) {
    const parse = (node, parent) => {
      node.id = node.$.id;
      node.hash = Web3.utils.sha3(node.id);
      if (parent) node.parent = parent;
      delete node.$;
      if (node.items) {
        if (Array.isArray(node.items.item)) {
          node.children = node.items.item;
          node.children.forEach((i) => parse(i, node.hash));
        } else {
          node.children = [parse(node.items.item, node.hash)];
        }
        delete node.items.item;
      } else if (node.sub_items && node.sub_items.item) {
        if (Array.isArray(node.sub_items.item)) {
          node.children = node.sub_items.item;
          node.children.forEach((i) => parse(i, node.hash));
        } else {
          node.children = [parse(node.sub_items.item, node.hash)];
        }
        delete node.sub_items.item;
        return node;
      }
    };
    const billingModel = {};
    billingModel.billing_units = json.billing_model.billing_unit;
    billingModel.billing_units.forEach((unit) => parse(unit));
    billingModel.hash = Web3.utils.sha3(billingModel.billing_units);
    return billingModel;
  }
}

class IcddParser {
  static _read(file) {
    const reader = new FileReader();
    return new Promise(function (resolve) {
      reader.onload = async () => {
        resolve(reader.result);
      };
      reader.readAsText(file);
    });
  }

  static async _parseFromFile(billingModel) {
    const raw = await this._read(billingModel);
    const parser = new xml2js.Parser(parserOptions);
    return parser.parseStringPromise(raw);
  }

  static async parseBillingModelFile(billingModel) {
    const parsed = await this._parseFromFile(billingModel);
    return BillingModel.build(parsed);
  }

  static parseBoQFiles(boqs) {
    const parse = async (boq, i) => {
      const parsed = await this._parseFromFile(boq);
      return BoQ.build(parsed);
    };
    return Promise.all(boqs.map(parse.bind(this)));
  }
}

export default IcddParser;