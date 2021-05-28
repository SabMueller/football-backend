import Club from '../models/club.model.js';

function getClubs(req, res) {
  Club.find().then((clubs) => res.json(clubs));
}

function getClubId(req, res) {
  const { clubId } = req.params;
  Club.findById(clubId)
    .then((club) => {
      res.json(club);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postClub(req, res) {
  const club = new Club({
    name: req.body.name,
    stadium: req.body.stadium,
    budget: req.body.budget,
    coach: req.body.coach,
  });
  club
    .save()
    .then((clubSaved) => res.json(`${clubSaved.name} was added.`))
    .catch((error) => res.json(error.message));
}

function updateClub(req, res) {
  const { clubId } = req.params;
  const updatedClub = req.body;

  Club.findByIdAndUpdate({ _id: clubId }, updatedClub, (error, doc) => {
    if (error) {
      res.json({ message: error });
      return;
    }
    res.json(doc);
  });
}

function deleteClub(req, res) {
  const { clubId } = req.params;
  Club.findByIdAndRemove({ _id: clubId }, (error, doc) =>
    res.json({
      success: true,
      message: `The club ${doc.name} has been deleted.`,
    })
  );
}

export { getClubs, getClubId, postClub, updateClub, deleteClub };
