//declare all your const here

//basic controllers go on here
exports.indexCtrl = (req, res) => {
	return res.status(200).json({
		message: "My Rule-validation API",
		status: "success",
		data: {
			name: "Jimoh Rildwan Adekunle",
			github: "@neymarjimoh",
			email: "jemohkunle2007@gmail.com",
			mobile: "09070822819",
			twitter: "@JnrJimoh"
		}
	})
};

exports.valRule = (req, res) => {
	const {rule, data } = req.body
	let first_rule
	let second_rule

	if(!rule){
		return res.status(400).json({
			message: "rule is required",
			status: "error",
			data: null
		})
	}

	if(!data) {
		return res.status(400).json({
			message: "data is required",
			status: "error",
			data: null
		})
	}

	const {field, condition, condition_value} = rule

	if(!field){
		return res.status(400).json({
			message: "rule.field is required",
			status: "error",
			data: null
		})
	}
	
	if(!condition){
		return res.status(400).json({
			message: "rule.condition is required",
			status: "error",
			data: null
		})
	}

	if(!condition_value){
		return res.status(400).json({
			message: "rule.condition_value is required",
			status: "error",
			data: null
		})
	}

	if(field.split(".").length >= 1){
		first_rule = field.split(".")[0];
		second_rule = field.split('.')[1]

		if(first_rule && second_rule){
			if((`${data[`${first_rule}`][`${second_rule}`]}`) == "undefined"){
				return res.status(400).json({
					message: `field ${field} is missing from data`,
					status: "error",
					data: null
				})
			}
			if(condition === "eq"){
				if(data[`${first_rule}`][`${second_rule}`] !== condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "neq"){
				if(data[`${first_rule}`][`${second_rule}`] === condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "gt"){
				if(data[`${first_rule}`][`${second_rule}`] < condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "gte"){
				if(data[`${first_rule}`][`${second_rule}`] <= condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "contains"){
				if(!(data[`${first_rule}`][`${second_rule}`].includes(`${condition_value}`))){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			return res.status(200).json({
				message: `field ${field} is validated successfully`,
				status: "success",
				data: {
					validation: {
						error: false,
						field: `${field}`,
						data_value: `${data[`${first_rule}`][`${second_rule}`]}`,
						condition: condition,
						condition_value: condition_value
					}
				}
			})


		}else{


			if(condition === "eq"){
				if(condition_value !== data[`${first_rule}`]){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "neq"){
				if(data[`${first_rule}`] === condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "gt"){
				if(data[`${first_rule}`] < condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "gte"){
				if(data[`${first_rule}`] <= condition_value){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}

			if(condition === "contains"){
				if(!(data[`${first_rule}`].includes(`${condition_value}`))){
					return res.status(200).json({
						message: `field ${field} failed validation`,
						status: "error",
						data: {
							validation: {
								error: true,
								field: `${field}`,
								data_value: `${data[`${first_rule}`]}`,
								condition: condition,
								condition_value: condition_value
							}
						}
					})
				}
			}
			return res.status(200).json({
				message: `field ${field} is validated successfully`,
				status: "success",
				data: {
					validation: {
						error: false,
						field: `${field}`,
						data_value: `${data[`${field}`]}`,
						condition: condition,
						condition_value: condition_value
					}
				}
			})
		}		

		
	}


	
}