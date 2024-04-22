function start() {

    //Variaveis globais//
    var bedrooms_user = [];
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------//
    const name_hotel = ("Hotel Blashi Enchanté");
    alert("Bem-vindo ao " + name_hotel);

    var name_user = prompt("Por favor, me diga seu nome.");
    alert("Ólá " + name_user);

    password()

    function password() {
        var password_user = prompt("Por favor, informe sua senha");

        if (password_user == 2678) {
            alert("Senha correta");
            choice()
        }
        else {
            alert("senha incorreta");
            password()
        }
    }

    function choice() {

        alert("Bem vindo ao " + name_hotel + ", " + name_user + ". É um imenso prazer ter você por aqui!");
        question();

        function question() {
            var choice_user = parseInt(prompt("O que senhor " + name_user + ". deseja fazer? 1.) Quartos 2.) Cadastro 3.) Informação dos cadastro 4.) Eventos 5.) Carro 6.) Manutenção 7.) Sair"));

            switch (choice_user) {

                case 0:
                    error();
                    break;
                case 1:
                    bedrooms();
                    break;
                case 2:
                    Cadastre();
                    break;
                case 3:
                    Cadastre_Users();
                    break;
                case 4:
                    Event()
                    break;
                case 5:
                    Gas_Station()
                    break;
                case 6:
                    air_conditioning_maintenance ()
                    break;
                case 7:
                    Close()
                    break;
                default:
                    error()
            }
        }

        function bedrooms() {

            var daily_value = parseFloat(prompt("Qual o valor padrão da diária?"));

            if (daily_value < 0 || isNaN(daily_value) || daily_value === " ") {
                alert('valor inválido');
                bedrooms();
            }
            else {
                daily();
            }

            function daily() {

                var daily_user = parseInt(prompt("Quantas diárias serão necessárias?"));

                if (daily_user === 0 || isNaN(daily_user) || daily_user === " ") {
                    alert("Digite o número de diarias");
                    daily();
                }
                else if (daily_user > 30) {
                    alert("Número excessivo de diárias.");
                    daily();
                }
                else {
                    result_daily_bedrooms = (daily_value * daily_user)
                    alert("O valor de " + daily_user + " dias é de R$:" + result_daily_bedrooms);
                }

                name_user_bedrooms = prompt("Qual o nome do hóspede?");

                choice_bedrooms()

                function choice_bedrooms() {
                    var bedrooms_number = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));

                    if (bedrooms_number > 20 || bedrooms_number <= 0 || isNaN(bedrooms_number || daily_user === " ")) {
                        alert('quarto inexistente');
                        choice_bedrooms();
                    }
                    else if (bedrooms_user.includes(bedrooms_number)) {
                        alert('quarto ocupado');
                        choice_bedrooms()
                    }
                    else {
                        bedrooms_user.push(bedrooms_number);
                        alert('Quarto livre');

                    }

                    var choice_bedrooms_user = prompt(name_user + ", você confirma a hospedagem para " + name_user_bedrooms + " por " + daily_user + " dias para o quarto " + bedrooms_number + " por R$" + result_daily_bedrooms + "? S/N");

                    if (choice_bedrooms_user == "S" || choice_bedrooms_user == "s") {
                        alert(name_user + ", reserva efetuada para " + name_user_bedrooms + ".");
                        choice();
                    }
                    else if (choice_bedrooms_user == "N" || choice_bedrooms_user == "n") {
                        alert("Reserva não efetuada.");
                        choice();
                    }
                    else {
                        choice_bedrooms();
                    }
                }
            }

        }

        function Cadastre() {
            var value = 0
            var i = 0
            var j = 0
            var value_cadastre = parseFloat(prompt("Qual o valor padrão da diária?"));

            if (value_cadastre < 0 || isNaN(value_cadastre) || value_cadastre === " ") {
                Cadastre();
            }
            else {

                var while_cadastre = true;
                while (while_cadastre) {
                    var Name_cadastre = prompt("Qual o nome do Hóspede?");

                    if (Name_cadastre == "pare") {
                        while_cadastre = false;

                    }
                    else {
                        var age = parseInt(prompt("Qual a idade do Hóspede?"));

                        if (age < 6) {
                            alert(Name_cadastre + " cadastrada(o) com sucesso. " + Name_cadastre + " possui gratuidade.");
                            i++;
                        }
                        else if (age > 60) {
                            alert(Name_cadastre + " cadastrada(o) com sucesso. " + Name_cadastre + " paga meia");
                            j++;
                            value += (value_cadastre / 2);
                        }
                        else if (age < 0 || isNaN(age) || age === " ") {
                            Cadastre();
                        }
                        else {
                            alert(Name_cadastre + " cadastrada(o) com sucesso.");
                            value += value_cadastre;

                        }
                    }
                }
                alert(Name_cadastre + ", o valor total das hospedagens é: R$" + value + " " + i + " gratuidade(s); " + j + " meia(s)");
                question();
            }
        }

        function Cadastre_Users() {
            var Name_research_cadastre = []
            start_cadastre ();
            function start_cadastre () {
                var choice_cadastre = parseInt(prompt("Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Lista - 4. Sair."));

                switch (choice_cadastre) {

                    case 0:
                        alert("tente novamente")
                        start_cadastre();
                        break;
                    case 1:
                        cadastre_user();
                        break;
                    case 2:
                        research_cadastre()
                        break;
                    case 3:
                        list_cadastre()
                        break;
                    case 4:
                        question()
                        break;
                    default:
                        alert("tente novamente")
                        start_cadastre();
                }

                function cadastre_user() {
                    var Name_user_cadastre = prompt("Qual o nome do Hóspede?");
                    alert("Hóspede " + Name_user_cadastre + " foi cadastrada(o) com sucesso!");
                    Name_research_cadastre.unshift(Name_user_cadastre);
                    start_cadastre();
                }

                function research_cadastre() {
                    var Name_user_research = prompt("Qual o nome do Hóspede?");
                    if (Name_research_cadastre.includes(Name_user_research)) {
                        alert("Hóspede " + Name_user_research + " foi encontrada(o)!");
                        start_cadastre();
                    }
                    else {
                        alert("Hóspede " + Name_user_research + " não foi encontrada(o)!");
                        start_cadastre();
                    }

                }

                function list_cadastre() {
                    var List_name_research = Name_research_cadastre.join(", ")
                    // Use o método join para criar uma string com os itens separados por vírgula
                    alert("Hospedes: " + List_name_research);
                    start_cadastre();
                }
            }
        }

        function Event() {
            var Auditorium_color
            var number_guest = parseInt(prompt("Qual o número de convidados para o seu evento?"));
        
            if (number_guest <= 220 && number_guest >= 1) {
                Auditorium_color = ("auditório laranja");
                number_the_more = number_guest - 150;
        
                if (number_the_more > 0) {
                    alert("Use o auditório Laranja (inclua mais " + number_the_more + " cadeiras)");
                    alert("Agora vamos ver a agenda do evento.");
                    date_event()
                }
                else {
                    alert("Agora vamos ver a agenda do evento.");
                    date_event()
                }
            }
            else if (number_guest >= 221 && number_guest <= 350) {
                Auditorium_color = ("auditório colorado");
                alert("Use o auditório Colorado");
                alert("Agora vamos ver a agenda do evento.");
                date_event()
        
            }
            else if (number_guest >= 351) {
                alert("Quantidade de convidados superior à capacidade máxima.");
                Event()
        
            }
            else if (number_guest <= 0) {
                alert("Quantidade de convidados inferior à capacidade máxima.");
                Event()
            }
        
            else {
                alert("caracter invalido");
                Event()
            }
        
            function date_event() {
                var day_event = prompt("Qual o dia do seu evento?");
        
                if (day_event == "sabado" || day_event == "domingo") {
        
                    var event_hours = parseInt(prompt("Qual a hora do seu evento?"));
        
                    if (event_hours >= 7 && event_hours <= 15) {
                        var Name_event = prompt("Qual o nome da empresa?");
                        alert("Auditório reservado para " + Name_event + ". " + day_event + " as " + event_hours + "hs.")
                        waiter_event()
                    }
                    else {
                        alert("auditório indisponível");
                        date_event()
                    }
        
                }
                else if (day_event == "segunda" || day_event == "terça" || day_event == "quarta" || day_event == "quinta" || day_event == "sexta") {
        
                    var event_hours = parseInt(prompt("Qual a hora do seu evento?"));
        
                    if (event_hours >= 7 && event_hours <= 23) {
                        var Name_event = prompt("Qual o nome da empresa?");
                        alert("Auditório reservado para " + Name_event + ". " + day_event + " as " + event_hours + "hs.")
                        waiter_event()
                    }
                    else {
                        alert("auditório indisponível");
                        date_event()
                    }
                }
                else {
                    alert("Dia incorreto");
                    date_event()
                }
        
                function waiter_event() {
                    var hours_event = parseInt(prompt("Qual a duração do evento em horas?"));
        
                    hours_event_waiter = hours_event / 2
        
                    var waiter = number_guest / 12 + hours_event_waiter
        
                    var waiter_value = Math.ceil(waiter) * 10.50
        
        
                    alert("São necessários " + Math.ceil(waiter) + " garçons.");
        
        
                    alert("Custo: R$" + waiter_value);
        
                    alert("Agora vamos calcular o custo do buffet do hotel para o evento.");
        
                    var coffe = number_guest * 0.2;
        
                    var water = number_guest * 0.5;
        
                    var salty = number_guest * 7;
        
                    var value_coffe = coffe * 0.20;
        
                    var value_water = water * 0.50;
        
                    var value_salty = (salty / 100);
        
                    var total_value_coffe = (coffe * 0.80);
        
                    var total_value_water = (water * 0.40)
        
                    var total_value_salty = (Math.ceil(value_salty) * 34);
        
                    var value_buffet = (total_value_coffe + total_value_water + total_value_salty);
        
                    var hours_total_event = (hours_event + event_hours)
        
                    var event_value = (waiter_value + value_buffet);
        
                    alert("O evento precisará de " + coffe + " litros de café, " + water + " litros de água, " + salty + " salgados.");
        
                    alert ("Evento no " + Auditorium_color + ".");
        
                    alert ("Nome da empresa: " + Name_event + ".");
        
                    alert ("Data: " + day_event + "," + event_hours + "h às " + hours_total_event + "h." )
        
                    alert ("Duração do evento: " + hours_event + "h." );
        
                    alert ("Quantidade de garçons: " + Math.ceil(waiter));
        
                    alert ("Quantidade de Convidados: " + number_guest);
        
                    alert ("Custo do garçons: R$" + waiter_value);
        
                    alert ("Custo do Buffet: R$" + value_buffet);
        
                    alert ("Valor total do Evento: R$" + event_value);
        
                    choice_event_fun ()
        
                    function choice_event_fun (){
        
                    var choice_event = prompt ( "Gostaria de efetuar a reserva? S/N");
        
                    if (choice_event === "S"){
                        alert (name_user + ", reserva efetuada com sucesso.");
                        choice()
                    }
                    else if (choice_event === "N"){
                        alert("Reserva não efetuada.");
                        choice()
                    }
                    else {
                        alert ("caracter errado");
                        choice_event_fun ()
                    }
        
        
        
        
        
                    }
                }
            }
        }

        function Gas_Station() {

            const Fuel_Tank = 42
        
            var value_alcool_wayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
        
            var value_petrol_wayne = parseFloat(prompt ("Qual o valor da gasolina no posto Wayne Oil?"));
        
            var value_alcool_stark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
        
            var value_petrol_stark = parseFloat (prompt("Qual o valor da gasolina no posto Stark Petrol?"));
        
            var Percentage = 0.30;
        
            var value_alcool_Stark_discount = value_alcool_stark * (1 - Percentage);
        
            var value_alcool_wayne_discount = value_alcool_wayne * (1 - Percentage);
        
            if (value_petrol_wayne > value_alcool_wayne_discount && value_petrol_stark > value_alcool_Stark_discount){
                alert("O álcool está 30% mais barato do que a gasolina, abasteça com álcool");
        
                if (value_alcool_Stark_discount < value_alcool_wayne_discount){
                   alert (name_hotel +", é mais barato abastecer com álcool no posto Wayne Oil.")
                }
                else if (value_alcool_Stark_discount > value_alcool_wayne_discount){
                    alert (name_hotel +", é mais barato abastecer com álcool no posto Stark Petrol.")
                }
                else {
                    if (value_petrol_stark < value_petrol_wayne ){
                        alert (name_hotel + ", é mais barato abastecer com gasolina no posto Stark Petrol.")
                    }
                    else if (value_petrol_stark > value_petrol_wayne){
                        alert (name_hotel + ", é mais barato abastecer com gasolina no posto Wayne Oil.")
                    }
                }
                
            }
        
            question()
        }

        function air_conditioning_maintenance (){
            var choice_air_conditioning = "S";
            var name_best_proposal = null;
            var value_best_proposal = Infinity;
        
            while (choice_air_conditioning === "S"){
                var name_air_conditioning = prompt("Qual o nome da empresa?");
                var value_air_conditioning = parseFloat(prompt("Qual o valor por aparelho?"));
                if (value_air_conditioning === 0 || isNaN(value_air_conditioning) || value_air_conditioning === " ") {
                    alert("Caracter incorreto");
                    air_conditioning_maintenance();
                }
                else{
                var quantity_air_conditioning = parseInt(prompt("Qual a quantidade de aparelhos?"));
            }
            if (quantity_air_conditioning === 0 || isNaN(quantity_air_conditioning) || quantity_air_conditioning === " ") {
                alert("Caracter incorreto");
                air_conditioning_maintenance();
            }
            else{
                var discount_air_conditioning = parseFloat(prompt("Qual a porcentagem de desconto?"));
            }
            if (isNaN(discount_air_conditioning) || discount_air_conditioning === " ") {
                alert("Caracter incorreto");
                air_conditioning_maintenance();
            }
            else{
                var minimum_discount = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
            }
            if (minimum_discount === 0 ||isNaN(minimum_discount) || minimum_discount === " ") {
                alert("Caracter incorreto");
                air_conditioning_maintenance();
            }
            else{
        
                var value_total = value_air_conditioning * quantity_air_conditioning;
        
                if (quantity_air_conditioning > minimum_discount){
                    var value_discount = value_total * (1 - discount_air_conditioning / 100);
                    alert ("O serviço de " + name_air_conditioning + " custará R$" + value_discount);
                    value_total = value_discount; 
                }
                else{
                    alert ("O serviço de " + name_air_conditioning + " custará R$" + value_total);
                }
        
                if (value_total < value_best_proposal){ 
                    name_best_proposal = name_air_conditioning;
                    value_best_proposal = value_total; 
                }
                
                var choice_air_conditioning_value = prompt("Deseja informar novos dados, " + name_user +"(S/N)")
        
                if (choice_air_conditioning_value == "S" || choice_air_conditioning_value == "s"){
                    choice_air_conditioning = "S"
                }
                else if (choice_air_conditioning_value == "N" || choice_air_conditioning_value == "n"){
                    choice_air_conditioning = "N"
                
            }
            }
        
            
        }
        alert("O orçamento de menor valor é o " + name_best_proposal + " por R$" + value_best_proposal);
        question()
        }
        
        function Close() {
            var confirm = parseInt(prompt("Realmente deseja sair 1.) Sim 2.) Não"));
            if (confirm == 1) {
                alert("Muito obrigado e até logo, " + name_user);
                window.close();
            }
            else if (confirm == 2) {
                alert("Obrigado por continuar conosco");
                question();
            }
            else {
                alert("Número invalido");
                Close();
            }

        }

        function error() {
            alert("erro. Agora você vai voltar para a função de escolhas.");
            question();
        }
    }



}
start();

