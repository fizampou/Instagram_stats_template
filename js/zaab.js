window.onload = function(){
    window.addEventListener('scroll', updateRows);

    var rows = document.getElementsByClassName("row"),
        row;

    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };

    var followersAnim = new countUp(document.getElementById("followersNo"), 0, 2852, 0, 4.5, options);
    followersAnim.start();

    var followingAnim = new countUp(document.getElementById("followingsNo"), 0, 1589, 0, 2.5, options);
    followingAnim.start();

    function updateRows () {
        for(var i=0; i<rows.length; i++) {
            row = rows[i];
            if (withinViewport(row)) {
                row.classList.add('inView');
                row.classList.add('fadeIn');
                row.classList.remove('notInView');
                row.classList.remove('fadeOut');
            }
            else if(!row.classList.contains("alwaysShow")) {
                row.classList.add('notInView');
                row.classList.add('fadeOut');
                row.classList.remove('inView');
                row.classList.remove('fadeIn');
            }
        }
    }

    var tableDiv = document.getElementById("tableView");

    var table = document.createElement('table');
    for (var i=0; i < 8; i++){
        var tr = document.createElement('tr');   
        for(var j=1; j < 30; j++){
            if(i === 0) {
                //first row
                var td = document.createElement('td');
                var text1 = document.createTextNode(j);
                (j%2===0) && td.appendChild(text1);
                tr.appendChild(td);
            } else {
                if(j===1 ){
                    var td = document.createElement('td');
                    (i===2) && td.appendChild(document.createTextNode('M'));
                    (i===4) && td.appendChild(document.createTextNode('W'));
                    (i===6) && td.appendChild(document.createTextNode('F'));
                    tr.appendChild(td);
                } else {
                    var td = document.createElement('td');
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    (randomNumber%2===0) && td.classList.add('pinkBackgroundColor');
                    (randomNumber%3===0) && td.classList.add('lightGreyBackgroundColor');
                    (randomNumber%7===0) && td.classList.add('brownBackgroundColor');
                    (randomNumber%5===0) && td.classList.add('redBackgroundColor');
                    tr.appendChild(td);
                }
            }
        }
        table.appendChild(tr);
    }
    tableDiv.appendChild(table);
}