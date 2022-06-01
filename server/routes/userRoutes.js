const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const router = require("express").Router();

router.post("/register", userCtrl.register);
router.post("/verify-email", userCtrl.activateEmail);
router.post("/login", userCtrl.login);
router.post("/refresh_token", userCtrl.getAccessToken);
router.post("/forgot-password", userCtrl.forgotPassword);
router.post("/reset-password", auth, userCtrl.resetPassword);
router.get("/profile", auth, userCtrl.getUserInfo);
router.get("/all-profiles", auth, authAdmin, userCtrl.getUsersAllInfo);
router.get("/logout", userCtrl.logout);
router.patch("/update-profile", auth, userCtrl.updateUser);
router.patch("/update_all/:id", auth, authAdmin, userCtrl.updateUserRole);
router.delete("/delete-profile/:id", auth, authAdmin, userCtrl.deleteUser);

module.exports = router;