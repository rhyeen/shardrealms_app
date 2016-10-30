module.exports = function(app, models, STATICS, bodyParser) {
  
  function helperFunction() {
    return 0;
  }

  /**
   * API: Get current time
   */
  app.get(STATICS.routes.calendarNow + "/:campaign", function(req, res) {
    var campaign = req.params.campaign;

    if (!isValidCampaign(campaign)) {
      res.status(400).send("Invalid campaign");
      return;
    }

    findObj = {
      'campaign': campaign
    };

    models['campaign'].findOne(findObj, function (err, document) {
      if (err) {
        console.error("ERROR: Get current time:\n" + err);
        res.status(500).send('Could not connect to the database.');
        return;
      }

      if (!document) {
        res.status(400).send("Invalid campaign");
        return;
      }

      returnValue = {
        'era': document['era'],
        'year': document['year'],
        'month': document['month'],
        'week': document['week'],
        'day': document['day']
      }

      res.send(returnValue);
    });
  });
};