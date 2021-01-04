module.exports = (app) => {
	//! Custom Vars
	const PORT = process.env.PORT || 5000;
	const { log } = console;

	app.listen(PORT, (err) =>
		err ? log(err) : log(`Listening on PORT > ${PORT}`)
	);
};
