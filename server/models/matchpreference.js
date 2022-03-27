import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MatchPreferenceSchema = new Schema({
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
    height: {
        type: Number,
        required: [true, 'Height Required!']
    },
    marital_status: {
        type: String,
        enum: {
            values: [
                'single',
                'never married',
                'divorced',
                'widowed',
                'legally separated'
            ]
        },
        required: [true, 'Marital Status Required!']
    },
    skin: {
        type: String,
        enum: {
            values: [
                'fair',
                'dark',
                'tan',
                'light',
                'brown',
                'black',
                'white'
            ]
        },
        required: [true, 'Skin Required!']
    },
    hair: {
        type: String,
        enum: {
            values: [
                'black',
                'blue',
                'brown',
                'blonde',
                'red',
                'grey',
                'white'
            ]
        },
        required: [true, 'Hair Required!']
    },
    eyes: {
        type: String,
        enum: {
            values: [
                'blue',
                'brown',
                'green',
                'grey',
                'hazel',
                'red',
            ]
        },
        required: [true, 'Eyes Required!']
    },
    interests: {
        type: String,
        enum: {
            values: [
                'sports',
                'music',
                'movies',
                'books',
                'tv',
                'games',
                'art',
                'food',
                'travel',
                'fashion',
                'politics',
                'religion',
                'science',
                'technology',
                'business',
                'entertainment',
                'health',
                'education',
                'family',
                'home',
                'career',
                'other'
            ]
        },
        required: [true, 'Interests Required!']
    },
    about: {
        type: String,
        required: [true, 'About Required!']
    },
    ethnicity: {
        type: String,
        required: [true, 'Ethnicity Required!']
    },
    religion: {
        type: String,
        enum: {
            values: [
                'islam',
                'hindu'
            ]
        },
        required: [true, 'Religion Required!']
    },
    education: {
        type: String,
        enum: {
            values: [
                'high school',
                'college',
                'graduate',
                'post graduate',
                'other'
            ]
        },
        required: [true, 'Education Required!']
    },
    profession: {
        type: String,
        enum: {
            values: [
                'student',
                'unemployed',
                'employed',
                'other'
            ]
        },
        required: [true, 'Profession Required!']
    },
    native_language: {
        type: String,
        enum: {
            values: [
                'english',
                'bengali',
                'hindi',
                'urdu',
                'french',
                'spanish',
                'german',
                'italian',
                'portuguese',
                'russian',
                'chinese',
                'japanese',
                'korean',
                'other'
            ]
        },
        required: [true, 'Native Language Required!']
    },
    city_of_living: {
        type: String,
        required: [true, 'City Of Living Required!']
    },
    country_of_living: {
        type: String,
        required: [true, 'Country Of Living Required!']
    },
    country_of_origin: {
        type: String,
        required: [true, 'Country Of Origin Required!']
    }
}, { timestamps: true });

export default mongoose.models.MatchPreference || mongoose.model('MatchPreference', MatchPreferenceSchema);