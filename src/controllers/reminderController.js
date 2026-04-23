export const ReminderController = {
  async getAllReminders(req, res) {
    res.send("Get all reminders");
  },
  async getReminderById(req, res) {
    const reminderId = parseInt(req.params.id);
    res.send(`Reminder id: ${reminderId}`);
  },
  async createReminder(req, res) {
    res.send("Create a new reminder");
  },
  async updateReminder(req, res) {
    const reminderId = parseInt(req.params.id);
    res.send("Update a reminder");
  },
  async deleteReminder(req, res) {
    const reminderId = parseInt(req.params.id);
    res.send("Delete a reminder");
  },
};
