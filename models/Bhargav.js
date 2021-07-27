module.exports = (sequelize, DataTypes) => {
	const Bhargav = sequelize.define("BhargavBio", {
		fullName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
		Dob: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
		Address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
	});

	return Bhargav;
};