In my personal opinion, which ever way you convert it, the roman numerals kata is confused. Yes all the rules around conversion  provides a great framework to hone KISS TDD practices. However, in my opinion, the extra reading you have to do to find out these rules doesn't equal the payoff of the solution.

Katas like roman numerals serve a purpose for new devs. It presents a what seems like at first complex and/or near impossible task and through TDD allows the developer, if successful, the chance to see the wonders of what code can do. The problem for javascript developers specifically, is that as a loosely typed language the edge cases and exception handling that would be inherent in strong typed languages only muddy the water of a kata such as this. You focus on your KISS TDD suite and you get a result that due to javascripts array methods, can be produced in a very potentially satisfying very few lines. Or you don't take the learning and don't break it down to just the happy path and you spend forever getting side tracked by the aforementioned error handling and edge cases. 

Generally no where in the kata does it specify what should happen if you pass in a value that isnt a roman numeral or arabic. It doesnt consider whether the input will be a valid roman numeral or a negative integer. At best it specifies that romans didnt have zero as a concept, but we're not writing code in ancient rome! And our new developers arent (mostly) learned in the rules of roman counting systems. Perhaps there was a point in the past where new developer cohorts had had an education where classics was an option or even mandatory in high school. Maybe knowing roman numerals was important to get a place to study at an oxbridge or redbrick universities. I'm sure for those cohorts this was a cute exercise, but from my experience those aren't the life experiences of the cohorts today. Today we're looking further afield, we're diversifying our knowledge base, we're moving forward, gaining new perspectives. We're getting more people round the table to improve our problem solving, but for what?

In my opinion developers that get hung up on this kata today, their defining feature isnt that they are unfamiliar with roman numerals but that they want to solve problems. Javascript looseness means that you have to go out and make the code more robust. I think the knock on affect of that for many new developers is that they look into roman numerals and just see all the holes they have to cover and miss the KISS teaching moment.

But isnt this what we want? Dont we want developers asking questions, ensuring every case is covered?

The roman numerals kata is confused. Not the developer. It's two katas in one. There is the database kata that with some logic can create a lot from not much. And there is the validation kata.

The roman numerals validation kata ensures that what ever is being asked of the database function fits within the realm of its capabilities. Not only does splitting this kata in two ensure a clear objective for the developer it also introduces the developer to important ideas around architecture (surely something far more useful in a software developers day to day).

Below I've outlined what I've found online about the rules of roman numerals in the style of ACs. It might not produce the leanest, sleekest solution, but I hope that it scratches the 'what if' itch. I know in my place of work asking the right questions is far more valuable skill than a one line solution.

Standard Rule Set

1. Roman numerals only represent numbers from 1 to 3999

2. Roman numerals are read, left to right, in descending order

3. There are seven singular base numbers, that when in different, ascending pairs, form subtractive numbers

4. Subtractive numbers, alongside V, L and D can only appear once

5. Every other base number can appear a maximum of 3 times

Bracket notation rule set
