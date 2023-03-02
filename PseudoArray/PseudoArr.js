// The Symbol functions 
let add = Symbol("add")
let show = Symbol("show");
let del = Symbol("delete");
let index = Symbol("index");
let count_el = Symbol("count_el");
let base_del = Symbol("base_del");
let restruct = Symbol("restruct")

// The reserve arr
let help_arr = {};

// The main "PseudoArr" structure
let new_arr = {

    [base_del]: function(item) {
        for (let key in this) {
            if (this[key] === item) {
                delete this[key];
                return;
            };
        };
    },

    [restruct]: function() {
        let restr_arr = {};

        for (let ind_elem in this) {
            restr_arr[Object.keys(restr_arr).length + 1] = this[ind_elem];
        };

        
        for (let ind_elem in this) {
            delete this[ind_elem];
        }


        for (let ind_elem in restr_arr) {
            this[add](restr_arr[ind_elem]);
        }

    },

    [count_el]: function(item) {
        let count_fnd = 0;

        for (let key in this) {
            if (this[key] == item) {
                count_fnd += 1;
            }
        };
        
        return count_fnd;
    },

    [add]: function plus(item) {
        this[Object.keys(new_arr).length + 1] = item;
    },
    
    [show]: function() {
        for (let key in this) {
            console.log(this[key]);
        };
    },

    [del]: function(item, count) {
        if (count > this[count_el](item)) {
            console.log("Error, the number of items you want to remove is higher than themselves");
            return;
        };

        for (let num = 0; num < count; num++) {
            this[base_del](item);
        };

        new_arr[restruct]();

    }
}

// console.log("Error, the number of items you want to remove is higher than themselves"); 

// Improvised adding
for (let i = 0; i < 3; i++) {
    new_arr[add](123);
}

// Test with methods of "PseudoArr"
new_arr[add](126);
new_arr[del](123, 3);
new_arr[add](125);
new_arr[add](128);

// Input the results
console.log(new_arr);