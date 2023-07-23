// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract DecentraBet {

    //address publique du propritaire du contrat
    address public owner;

    // mapping pour stocker les balances de tous les parieures 
    mapping(address=>uint256) public balances;

    // mapping pour stocker les details de chaque paris avec betId comme clé
    mapping(uint256=>Bet) public bets;

    // mapping pour stocker les cotes de chaque paris 
    mapping(uint256=>uint256) public odds;

    //pour suivre le nombre de paris enregistrer 
    uint256 public betCounter;

    //struct pour representer un paris 
    struct Bet {
        address user;
        uint256 amount;
        bool win;
        bool paid;
    }

    //un constructor du contrat 
    constructor(){
        owner = msg.sender;
        betCounter = 0;
    }

    //un modifier pour restreindre certaine fonction que au proprietaire du contrat
    modifier onlyOwner (){
        require(msg.sender==owner,"pour realiser cette action il faut etre proprietaire du contrat");
        _;
    }

    // event est emis lorsque pari est placée.
    event BetPlaced(uint256  betId, address  user, uint256 amount);
    
    // event est déclenché pour indiquer le resultat d'un pari.
    event BetResult(uint256  betId, bool win, bool paid);
    
    // function permettant de placer un paris 
    function placeBet(uint _odds) public payable{
        
        // on verifie si le montant est superieur à zero 
        require(msg.value > 0, "le montant doit etre superieur a zero");
        
        // un identifiant unique est attribué au nouveau pari
        uint256 newBetId = betCounter++;
        
        //le detail du paris  sont enregistrés dans la structure de données "bets" avec l'identifiant de pari correspondant comme clé.
        bets [newBetId] = Bet({
            user : msg.sender,
            amount : msg.value,
            win : false,
            paid : false
        });

        //correpondre les cotes avec les identifiants 
        odds[newBetId]=_odds;

        //event BetPlaced est emis 
        emit BetPlaced(newBetId, msg.sender, msg.value);
    }

    //fonction permettant de définir le resultat d'un paris 
    function setBetResult(uint256 _betId, bool _win) public onlyOwner{
        // on verifie si l'identifiant du paris est inferieur a betCounter
        require(_betId < betCounter,"id incorrect");
        // on verifie n'a pas deja ete payé.
        require(!bets[_betId].paid, "Ce pari est paye");
        // mise à jour 
        bets[_betId].win = _win;
        // mise a jours 
        bets[_betId].paid = true;
        // emis BetResult
        emit BetResult(_betId, _win, true );
        // si gagnat on fera le calcul du gain et on mis à jour sa balance 
        if (_win) {
            uint256 winnings = bets[_betId].amount*odds[_betId];
            balances[bets[_betId].user] += winnings;
                }
        }
    function withdraw() public {
        //on recupere le solde du parrieur du mapping balances et on le stock dans la variable amount
        uint256 amount = balances[msg.sender];

        //on verifie le montant si <0 on envoie le message d erreur 
        require(amount > 0, "Aucun fonds disponibles pour le retrait");
        
        //on met la balance du parrieur à 0 dans le mapping et se premunir des attaks reentrancy
        //en mettant la balance du msg.sender à 0 avant le call et arréter la boucle.
        balances[msg.sender] = 0;
        
        //envoie du montant au msg.sender
        (bool success, ) = msg.sender.call{value: amount}("");

        //si la fonction call ne renvoie pas success on renvoie le message d erreur 
        require(success, "Impossible d'envoyer les fonds");

        //on emet l'evenement BetResult
        emit BetResult(0, false, true);
}

    }
 
