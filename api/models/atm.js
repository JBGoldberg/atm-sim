
class Atm {

  constructor() {

    // Valid note amounts order define priority to deliver the notes
    this.notes = [10, 20, 50, 100].sort(function (a, b) {
      return b - a;
    });

  }

  withdraw($amount) {

    if(!$amount)
      $amount = 0;

    if ($amount < 0)
      throw "InvalidArgumentException";

    let money = new Map();

    while ($amount > 0) {

      for (let _pointer = 0; _pointer < this.notes.length; _pointer++) {

        let quantity = parseInt($amount / this.notes[_pointer]);
        $amount -= this.notes[_pointer] * quantity;
        money.set(this.notes[_pointer], quantity)

      }

      if ($amount > 0)
        throw "NoteUnavailableException";
    }

    return money;
  }

}

module.exports = Atm

