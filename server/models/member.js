import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);