/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            count += 1
        }
    }

    return count >= k ? "NO" : "YES";

}
