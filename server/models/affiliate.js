import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AffiliateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Server Error! User Failed To Create.'],
    },
    gender: {
        type: String,
        enum: {
            values: [
                'male',
                'female'
            ]
        },
        required: [true, 'Gender Required!']
    },
    age: {
        type: Number,
        required: [true, 'Age Required!']
    },
    city_of_living: {
        type: String,
        required: [true, 'City Required!']
    },
    country_of_living: {
        type: String,
        required: [true, 'Country Required!']
    },
}, { timestamps: true });

export default mongoose.models.Affiliate || mongoose.model('Affiliate', AffiliateSchema);