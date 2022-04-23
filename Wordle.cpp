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
				//TODO 
				//WORDLE LOGIC
            }
        }
		printGame(board, letters);
	}
}