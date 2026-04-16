import { VitalsHistory } from "../models/VitalsHistory.model.js";
import {LabResult} from "../models/LabResult.model.js";


export const getVitalsHistory = async(req, res) => {
    try{
        const userId = req.user._id;

        const history = await VitalsHistory.find({user: userId}).sort({dateRecorded: -1}).limit(12);

        if(history.length === 0){
            return res.status(200).json([]);
        }
        res.status(200).json(history)
    }catch(error){
        console.error("Error fetching vitals history:", error);
        res.status(500).json({message: "An error occurred while fetching vitals history."})
    }
};

export const getLabResults = async(req, res) => {
    try{
        const userId = req.user._id;

        const reports = await LabResult.find({user: userId}).sort({createdAt: -1 }).limit(5);

        if(reports.length === 0){
            return res.status(200).json([]);
        }
        res.status(200).json(reports)
    }catch(error){
        console.error("Error fetching lab results:", error);
        res.status(500).json({message: "An error occurred while fetching lab results."})
    }
}