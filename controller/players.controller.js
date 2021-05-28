import Player from '../models/player.model.js';

function getPlayers(req, res) {
  Player.find().then((players) => res.json(players));
}

function getPlayerId(req, res) {
  const { playerId } = req.params;
  Player.findById(playerId)
    .then((player) => {
      res.json(player);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postPlayer(req, res) {
  const player = new Player({
    name: req.body.name,
    price: req.body.price,
    free_transfer: req.body.free_transfer,
    club: req.body.club,
    position: req.body.position,
    email: req.body.email,
    skills: req.body.skills,
    sold: req.body.sold,
  });
  player
    .save()
    .then((playerSaved) => res.json(`${playerSaved.name} was added.`))
    .catch((error) => res.json(error.message));
}

function updatePlayer(req, res) {
  const { playerId } = req.params;
  const updatedPlayer = req.body;

  Player.findByIdAndUpdate({ _id: playerId }, updatedPlayer, (error, doc) => {
    if (error) {
      res.json({ message: error });
      return;
    }
    res.json(doc);
  });
}

function deletePlayer(req, res) {
  const { playerId } = req.params;
  Player.findByIdAndRemove({ _id: playerId }, (error, doc) =>
    res.json({
      success: true,
      message: `The player ${doc.name} has been deleted.`,
    })
  );
}

export { getPlayers, getPlayerId, postPlayer, updatePlayer, deletePlayer };
