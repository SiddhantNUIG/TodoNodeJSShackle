import ToDos from "./TodoModel"

export const getTodo = async () => {
    try {
        const data = await ToDos.find({}).exec();
        //console.log(data);
        return data;
    } catch (err) {
        next(err);
    }

};

export const createTodo = async (data) => {
    try {
        //console.log(data);
        return await new ToDos(data).save();
    } catch (err) {
        next(err);
    }
};

export const updateTodo = async (id) => {
    try {
        //console.log(id);
        return await ToDos.findByIdAndUpdate(id, { $set: { done: true } }).exec();

    } catch (err) {
        next(err);
    }
};