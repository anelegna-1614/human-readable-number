module.exports = function toReadable (number) {
  let ten = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let ed = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let exception = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
let readableNumber = number.toString().split('');
let a;
let b;
let c;
if (readableNumber.length === 1) {
    switch (readableNumber[0]) {

        case '0':
            return ed[0];
            break;    
        case '1':
             return ed[1];
             break;
        case '2':
            return ed[2];
            break;
        case '3':
            return ed[3];
            break;
        case '4':
            return ed[4];
            break; 
        case '5':
            return ed[5];
            break;
        case '6':
            return ed[6];
            break;
        case '7':
            return ed[7];
            break;
        case '8':
            return ed[8];
            break;
        case '9':
            return ed[9];
            break;                   
    }
} else if (readableNumber.length === 2) {

    if (readableNumber[readableNumber.length - 2] === '1') {
        switch (number) {
            case 10:
            return exception[0];
            break;    
        case 11:
             return exception[1];
             break;
        case 12:
            return exception[2];
            break;
        case 13:
            return exception[3];
            break;
        case 14:
            return exception[4];
            break; 
        case 15:
            return exception[5];
            break;
        case 16:
            return exception[6];
            break;
        case 17:
            return exception[7];
            break;
        case 18:
            return exception[8];
            break;
        case 19:
            return exception[9];
            break;
        }
    } else if (readableNumber[readableNumber.length - 1] === '0') {
        switch (number) {
        case 20:
            return ten[0];
            break;    
        case 30:
             return ten[1];
             break;
        case 40:
            return ten[2];
            break;
        case 50:
            return ten[3];
            break;
        case 60:
            return ten[4];
            break; 
        case 70:
            return ten[5];
            break;
        case 80:
            return ten[6];
            break;
        case 90:
            return ten[7];
            break;
        }
    } else {

        switch (readableNumber[readableNumber.length - 2]) {
        case '2':
            a = ten[0];
            break;    
        case '3':
            a = ten[1];
            break;
        case '4':
            a = ten[2];
            break;
        case '5':
            a = ten[3];
            break;
        case '6':
            a = ten[4];
            break; 
        case '7':
            a = ten[5];
            break;
        case '8':
            a = ten[6];
            break;
        case '9':
            a = ten[7];
            break;
    }
    switch (readableNumber[readableNumber.length - 1]) {
        case '1':
            b = ed[1];
            break;    
        case '2':
            b = ed[2];
            break;
        case '3':
            b = ed[3];
            break;
        case '4':
            b = ed[4];
            break;
        case '5':
            b = ed[5];
            break; 
        case '6':
            b = ed[6];
            break;
        case '7':
            b = ed[7];
            break;
        case '8':
            b = ed[8];
            break;
        case '9':
            b = ed[9];
            break;            
    } 
    return `${a} ${b}`;
} 

} else {
    switch (readableNumber[readableNumber.length - 3]) {
        case '1':
            c = ed[1];
            break;    
        case '2':
            c = ed[2];
            break;
        case '3':
            c = ed[3];
            break;
        case '4':
            c = ed[4];
            break;
        case '5':
            c = ed[5];
            break; 
        case '6':
            c = ed[6];
            break;
        case '7':
            c = ed[7];
            break;
        case '8':
            c = ed[8];
            break;
        case '9':
            c = ed[9];
            break;            
    }
    if (readableNumber[readableNumber.length - 2] === '0') {
        switch (readableNumber[readableNumber.length - 1]) {
            case '0':
                a = '';
                break;
            case '1':
                a = ed[1];
                break;    
            case '2':
                a = ed[2];
                break;
            case '3':
                a = ed[3];
                break;
            case '4':
                a = ed[4];
                break;
            case '5':
                a = ed[5];
                break; 
            case '6':
                a = ed[6];
                break;
            case '7':
                a = ed[7];
                break;
            case '8':
                a = ed[8];
                break;
            case '9':
                a = ed[9];
                break;            
        } 
        return (`${c} hundred ${a}`).trim();
    } else if (readableNumber[readableNumber.length - 2] === '1') {
        switch (+number.toString().substring(1)) {
            case 10:
            a = exception[0];
            break;    
        case 11:
            a = exception[1];
             break;
        case 12:
            a = exception[2];
            break;
        case 13:
            a = exception[3];
            break;
        case 14:
            a = exception[4];
            break; 
        case 15:
            a = exception[5];
            break;
        case 16:
            a = exception[6];
            break;
        case 17:
            a = exception[7];
            break;
        case 18:
            a = exception[8];
            break;
        case 19:
            a = exception[9];
            break;
        }
        return (`${c} hundred ${a}`).trim();
    } else if (readableNumber[readableNumber.length - 1] === '0'){
        switch (+number.toString().substring(1)) {
        case 20:
            b = ten[0];
            break;    
        case 30:
            b = ten[1];
             break;
        case 40:
            b = ten[2];
            break;
        case 50:
            b = ten[3];
            break;
        case 60:
            b = ten[4];
            break; 
        case 70:
            b = ten[5];
            break;
        case 80:
            b = ten[6];
            break;
        case 90:
            b = ten[7];
            break;
        }
        return (`${c} hundred ${b}`).trim();
    } else {
        switch (readableNumber[0]) {
            case '1':
                c = ed[1];
                break;    
            case '2':
                c = ed[2];
                break;
            case '3':
                c = ed[3];
                break;
            case '4':
                c = ed[4];
                break;
            case '5':
                c = ed[5];
                break; 
            case '6':
                c = ed[6];
                break;
            case '7':
                c = ed[7];
                break;
            case '8':
                c = ed[8];
                break;
            case '9':
                c = ed[9];
                break;            
        }
        switch (readableNumber[1]) {
            case '2':
            b = ten[0];
            break;    
        case '3':
            b = ten[1];
             break;
        case '4':
            b = ten[2];
            break;
        case '5':
            b = ten[3];
            break;
        case '6':
            b = ten[4];
            break; 
        case '7':
            b = ten[5];
            break;
        case '8':
            b = ten[6];
            break;
        case '9':
            b = ten[7];
            break;
        } 
        switch (readableNumber[2]) {
            case '1':
                a = ed[1];
                break;    
            case '2':
                a = ed[2];
                break;
            case '3':
                a = ed[3];
                break;
            case '4':
                a = ed[4];
                break;
            case '5':
                a = ed[5];
                break; 
            case '6':
                a = ed[6];
                break;
            case '7':
                a = ed[7];
                break;
            case '8':
                a = ed[8];
                break;
            case '9':
                a = ed[9];
                break;            
        }
        return (`${c} hundred ${b} ${a}`).trim(); 
    }
    }
}

