#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string text;
    std::getline(std::cin, text);
    std::vector<int> stack{-1};
    int best = 0;
    for (int index = 0; index < static_cast<int>(text.size()); ++index) {
        if (text[index] == '(') {
            stack.push_back(index);
        } else {
            stack.pop_back();
            if (stack.empty()) stack.push_back(index);
            else best = std::max(best, index - stack.back());
        }
    }
    std::cout << best << '\n';
}
