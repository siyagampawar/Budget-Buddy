const SavingSchema= require("../models/SavingModel")


exports.addSaving = async (req, res) => {
    const {amount, date}  = req.body

    const saving = SavingSchema({
        amount,
        date
    })

    try {
        //validations
        // if(!date){
        //     return res.status(400).json({message: 'All fields are required!'})
        // }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await saving.save()
        res.status(200).json({message: 'Saving Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(saving)
}

exports.getSaving = async (req, res) =>{
    try {
        const saving = await SavingSchema.find().sort({createdAt: -1})
        res.status(200).json(saving)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

// exports.deleteIncome = async (req, res) =>{
//     const {id} = req.params;
//     IncomeSchema.findByIdAndDelete(id)
//         .then((income) =>{
//             res.status(200).json({message: 'Income Deleted'})
//         })
//         .catch((err) =>{
//             res.status(500).json({message: 'Server Error'})
//         })
// }