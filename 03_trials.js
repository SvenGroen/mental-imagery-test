// In this file you can specify the trial data for your experiment


var languages =["German","English"]
var language = languages[Math.floor(Math.random() * languages.length)]

const trial_info = {
    rating_scale_trial: get_trials(0,5,language),
    rating_scale_task: get_trials(5,6,language)
};
