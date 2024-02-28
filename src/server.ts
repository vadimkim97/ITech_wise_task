import "dotenv/config";

import app from "./app";

// Define with default parameter, if value from process.env are empty
const PORT: number = Number(process.env.PORT || 3000);

// Server start
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
