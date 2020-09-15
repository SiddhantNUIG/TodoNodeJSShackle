import ToDos from "./TodoModel"
export const getTodo = async () => {
    const data = await ToDos.find({}).exec();
    return data;
};

export const createTodo = async (data) => {
    console.log(data);
    return await new ToDos(data).save();
};

export const updateTodo = async (id) => {
    console.log(id);
    return await ToDos.findByIdAndUpdate(id, { $set: { done: true } }).exec();
}