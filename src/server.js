require('dotenv').config();

const { PORT } = require('./config/Environments');
const DatabaseHelper = require('./infra/helpers/DatabaseHelper');

async function Main () {
  try {
    await DatabaseHelper.open();

    const App = require('./main/App');
    App.listen(PORT, () => console.info(`Listening at https://[::]:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

Main();
