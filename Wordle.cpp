// Wordle.cpp : This file contains the "main" function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <fstream>
#include <algorithm>
#include <vector>

using namespace std;



string getWord() {
    string line;
    int random = 0;
    int numOfLines = 0;
    ifstream File("words.txt");

    srand(time(0));
    random = rand() % 50;

    while (getline(File, line))
    {
        ++numOfLines;

        if (numOfLines == random)
        {
            return line;
        }

    }
}
bool checkWord(string *word) {
    string line;
    int random = 0;
    int numOfLines = 0;
    ifstream File("words.txt");

    srand(time(0));
    random = rand() % 12972;

    while (getline(File, line))
    {
        ++numOfLines;

        if (line == *word)
        {
            return true;
        }

    }
    return false;
}
void printGame(vector<string> board, vector<string> letters) {
    cout << "\033[1;32mWordle\033[1;32m\n";
    cout << "+----------------+\n";
    for (int i = 0; i < board.size(); i++) {
		cout << "|" + board[i] + "|\n";
    }
    cout << "+----------------+\n\033[1;30m";
    for (int i = 0; i < letters.size(); i++) {

        cout << "\033[1;30m" << letters[i] << " ";
    }
    cout << "\033[1;32m\n+----------------+\n";
}
string getInput() {
    string guess;
    cout << "Enter a word: ";
    cin >> guess;
    if (guess.length() != 5) {
        cout << "Enter a word that is 5 letters long...\n";
        getInput();
    }
    if (checkWord(&guess)) {
		cout << "That word is not valid...\n";
		getInput();
    }
    return guess;
}

int main() {
    cout << "\033[1;32mWordle\033[1;32m\n";
    vector<string> letters = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\0" };
    vector<char> lettersCheck = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
    vector<string> board = { "-----", "-----", "-----", "-----", "-----", "-----" };
    string word = getWord();
    //tries
	for (int i = 0; i < 6; i++) {
        string guess = getInput();
        // for each letter in the guess it checks for matching characters and highlights them green else yellow or grey
        for (int f = 0; f < guess.length(); f++) {
            for (int g = 0; g < word.length(); g++) {
                if (word[g] == guess[f]) {
                    board[i] = "\033[1;32m" + guess[f];
                    letters[find(lettersCheck.begin(), lettersCheck.end(), guess[f]) - lettersCheck.begin()] = "\033[1;32m" + letters[find(lettersCheck.begin(),lettersCheck.end(), guess[f]) - lettersCheck.begin()];
                } else if (word.find(guess[f])) {
                    cout << word << endl << guess << endl;
                    board[i][f] = "\033[1;33m" + guess[f];
                    letters[find(lettersCheck.begin(), lettersCheck.end(), guess[f]) - lettersCheck.begin()] = "\033[1;33m" + letters[find(lettersCheck.begin(), lettersCheck.end(), guess[f]) - lettersCheck.begin()];
                } else {
                    board[i][f] = "\033[1;30m" + guess[f];
                    letters[find(lettersCheck.begin(), lettersCheck.end(), guess[f]) - lettersCheck.begin()] = "\033[1;30m" + letters[find(lettersCheck.begin(), lettersCheck.end(), guess[f]) - lettersCheck.begin()];
                }
            }
        }
		printGame(board, letters);
	}
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
