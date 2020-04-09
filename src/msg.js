// prints the start screen!
export function init() {
    console.log(`
                              .       .                            
                             / ".   .' "                            
                     .---.  <    > <    >  .---.                    
                     |    \  \ - ~ ~ - /  /    |                    
         _____          ..-~             ~-..-~                     
        |     |   \~~~\.'                    "./~~~/                
       ---------   \__/                        \__/                 
      .'  O    \     /               /       \  "                   
     (_____,    "._.'               |         }  \/~~~/             
      "----.          /       }     |        /    \__/              
            "-.      |       /      |       /      ". ,~~|          
                ~-.__|      /_ - ~ ^|      /- _      "..-'          
                     |     /        |     /     ~-.     "-. _  _  _ 
                     |_____|        |_____|         ~ - . _ _ _ _ _>
_________________________________________________________________________

                    WELCOME TO SACHIN DUHAN 's CLI!
_________________________________________________________________________

    OVERVIEW and Commands 

    1. USE GIT              - duhan git push -m '{{message}}'
    2. start VS code        - duhan code {{dir}}
    3. run servers          - duhan {{server_name}}
    4. SHUTDOWN PC          - duhan shutdown
    5. RESTART              - duhan restart
    6. LAUNCH STUDY MODE    - duhan study

    `);
}
export function hello(message) {
    console.log(`
                        .-"""-.
                       / .===. \
                       \/ 6 6 \/
                       ( \___/ )
  _________________ooo__\_____/_____________________
 /                                                  \
| Hey, this is sachin duhan! Thanks for using my CLI |
 \______________________________ooo_________________/
                       |  |  |
                       |_ | _|
                       |  |  |
                       |__|__|
                       /-'Y'-\
                      (__/ \__)
    `);
}