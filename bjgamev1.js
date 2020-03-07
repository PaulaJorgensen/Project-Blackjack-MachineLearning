// CRAZY AJ'S FANTASY BLACKJACK JAMBOREE
// team carolina's wild card "Crazy AJ" has brought to your eyes a playable, not at all rigged, game of blackjack! 

                                            // 〜(￣▽￣〜)(〜￣▽￣)〜 \\


    // so guys, lets build our deck (array), and lets not mark any cards or anything. this is a clean operation fellas.
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();

    function createDeck()
    {
        deck = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    weight = 10;
                if (values[i] == "A")
                    weight = 11;
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }
   
   
    // now lets make a way to shuffle our deck without using our hands. since they are preoccipied counting someone elses hard earned money, fellas.
   
   
    function shuffle()
    {
        // for a whoppin' 1000 turns
        // and for good measure we'll switch the values of two random cards
       
       
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }
   
   
    // here's the fun part, obviously im the house, i am crazy aj after all. then there's you the sucker.. i- i mean the player...
    // and it gets set up like so
    
    
    var players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(var i = 1; i <= num; i++)
        {
            var hand = new Array();
            var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }
    

    // now for the new-fangled user interface thingamajig, a simple scam artist such as myself could in no way tilt this in my favor.
    // and that goes like this, a lil- a lil- a lil something like this 
   
    
    function createPlayersUI()
    {
        document.getElementById('players').innerHTML = '';
        for(var i = 0; i < players.length; i++)
        {
            var div_player = document.createElement('div');
            var div_playerid = document.createElement('div');
            var div_hand = document.createElement('div');
            var div_points = document.createElement('div');

            div_points.className = 'points';
            div_points.id = 'points_' + i;
            div_player.id = 'player_' + i;
            div_player.className = 'player';
            div_hand.id = 'hand_' + i;

            div_playerid.innerHTML = players[i].ID;
            div_player.appendChild(div_playerid);
            div_player.appendChild(div_hand);
            div_player.appendChild(div_points);
            document.getElementById('players').appendChild(div_player);
        }
    }

    // let's start the game fellas! you ready?

    function startblackjack()
    {
        document.getElementById('btnStart').value = 'Restart';
        document.getElementById("status").style.display="none";
        // deal 2 cards to every player object
        currentPlayer = 0;
        createDeck();
        shuffle();
        createPlayers(2);
        createPlayersUI();
        dealHands();
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }