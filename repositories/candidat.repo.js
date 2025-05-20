import CandidatModel from "../models/candidat.js";


const candidatRepo = {
    async insert(data) {
        return await CandidatModel.create(data);
    },
    // async delete(data) {
    //     return await CandidatModel.deleteOne(data);
    // },
    // async deleteById(id) {
    //     return await CandidatModel.findByIdAndDelete(id);
    // },
    async update(filter, data) {
        return await CandidatModel.update(filter, data);
    },
    async updateById(id, data) {
        return await CandidatModel.findByIdAndUpdate(id, data);
    },
    async find(query) {
        return await CandidatModel.find(query);
    },
    async findById(id) {
        return await CandidatModel.findById(id);
    },
    async findOne(query) {
        return await CandidatModel.findOne(query);
    }
};
export default candidatRepo;