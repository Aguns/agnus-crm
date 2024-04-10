"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stageRepository_1 = __importDefault(require("../../repository/crm/stageRepository"));
const getById = (id) => stageRepository_1.default.findById(id);
const getAll = () => stageRepository_1.default.findAll();
const create = (item) => stageRepository_1.default.create(item);
const getByName = (name) => stageRepository_1.default.findByName(name);
exports.default = {
    getAll,
    getById,
    create,
    getByName
};
