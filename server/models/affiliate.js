import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AffiliateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

export default mongoose.models.Affiliate || mongoose.model('Affiliate', AffiliateSchema);