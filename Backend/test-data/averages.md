---
topic: Averages
domain: quantitative_aptitude
difficulty: beginner_to_advanced
---

# Averages

## 1. Concept

**Definition:** The average (or arithmetic mean) of a set of numbers is the sum of all the values divided by the number of values.

**Core idea:** Average = (Sum of observations) / (Number of observations). It represents a single "central" value that summarizes a data set.

**Important terminology:**
- **Weighted Average:** An average where different values contribute unequally, based on associated weights (e.g., group sizes).
- **Deviation Method:** Calculating averages using deviations from an assumed value, useful for large or complex data sets.
- **Average Speed:** A special application of averages used when combining speeds over distances or times (not to be confused with the simple average of speeds).

**How to recognize this type of problem:**
- Questions asking for a "mean," "average," or involving replacement/inclusion/exclusion of a value from a group.
- Problems involving average speed, average age, or average marks with changing group composition.

**Important observations:**
- Sum = Average × Number of observations — this reverse relationship is used constantly to solve for unknowns.
- The average speed for a journey covering **equal distances** at different speeds is NOT the simple average of the two speeds; it requires the harmonic-mean-based formula.

---

## 2. Important Formulas

**2.1 Basic Average**

Average = (Sum of all observations) / (Number of observations)

Sum = Average × Number of observations

Used for computing or reverse-computing sums from averages.

**2.2 Effect of Adding a New Observation**

If the average of n numbers is A, and a new number x is added:

New Average = (nA + x) / (n + 1)

Used in problems where a new member/value joins a group.

**2.3 Effect of Removing an Observation**

If the average of n numbers is A, and a number x is removed:

New Average = (nA − x) / (n − 1)

Used in problems where a member/value leaves a group.

**2.4 Average of Natural Number Series**

- Average of first n natural numbers = (n + 1)/2
- Average of first n odd numbers = n
- Average of first n even numbers = n + 1

Used directly for standard number series without needing to sum manually.

**2.5 Weighted Average**

Weighted Average = (n1×a1 + n2×a2) / (n1 + n2)

Used when combining two (or more) groups with different sizes and different individual averages.

**2.6 Average Speed for Equal Distances**

If equal distances are covered at speeds a and b:

Average Speed = 2ab / (a + b)

Used specifically when the **distance** covered at each speed is the same (e.g., a round trip).

**2.7 Average Speed for Equal Time Intervals**

If equal time is spent traveling at speeds a and b:

Average Speed = (a + b) / 2

Used specifically when the **time** spent at each speed is the same — this is the simple average, unlike the equal-distance case.

---

## 3. Short Tricks

**3.1 Deviation Method**

**Trick:** Choose a convenient assumed average (close to the expected mean), find each value's deviation from it, and add the average of the deviations to the assumed value.
**When it works:** Useful for large data sets with values clustered around a round number.
**Example:** For values 98, 102, 101, 99, assume average = 100. Deviations = −2, 2, 1, −1, sum = 0. Actual average = 100 + 0/4 = 100.
**Limitation:** Requires careful sign-tracking of deviations (positive/negative).

**3.2 Replacement Shortcut**

**Trick:** When one value in a group is replaced by another, the change in total = change in average × number of observations.
**When it works:** Any problem involving replacing one person/value with another and a resulting change in average.
**Example:** If replacing a member changes the average of 10 people by +2, the new member's value is 20 more than the value replaced.
**Limitation:** Only valid if the number of observations in the group stays the same.

**3.3 Average Speed — Choosing the Right Formula**

**Trick:** If the problem specifies equal **distances**, use 2ab/(a+b). If it specifies equal **time**, use the simple average (a+b)/2.
**When it works:** Always — this distinction is the single most common source of error in average speed problems.
**Example:** A car travels 100 km at 40 km/h and another 100 km at 60 km/h (equal distance) → average speed = 2×40×60/100 = 48 km/h, NOT 50 km/h.
**Limitation:** Only applies to two-speed combinations; for more than two unequal segments, compute total distance/total time directly.

---

## 4. Solved Examples

### Example 1

**Problem:**
Find the average of 12, 15, 18, 21, and 24.

**Approach:**
Sum all values and divide by the count.

**Solution:**
Sum = 12+15+18+21+24 = 90
Average = 90/5 = 18

**Answer:**
18

**Key Insight:**
Direct application of the basic average formula.

---

### Example 2

**Problem:**
Find the average of the first 10 natural numbers.

**Approach:**
Apply the standard formula for the average of the first n natural numbers.

**Solution:**
Average = (n+1)/2 = (10+1)/2 = 5.5

**Answer:**
5.5

**Key Insight:**
No need to add all 10 numbers individually — the formula (n+1)/2 gives the result directly.

---

### Example 3

**Problem:**
The average of 5 numbers is 20. If one number is excluded, the average becomes 18. Find the excluded number.

**Approach:**
Find the total sum before and after exclusion, then take the difference.

**Solution:**
Original sum = 20 × 5 = 100
Remaining sum (4 numbers) = 18 × 4 = 72
Excluded number = 100 − 72 = 28

**Answer:**
28

**Key Insight:**
Convert averages to sums first — this is the key step in nearly all inclusion/exclusion average problems.

---

### Example 4

**Problem:**
The average weight of 30 students is 45 kg. When one student leaves, the average becomes 44.5 kg. Find the weight of the student who left.

**Approach:**
Calculate total weight before and after, then subtract.

**Solution:**
Original total = 30 × 45 = 1350
Remaining total (29 students) = 29 × 44.5 = 1290.5
Weight of student who left = 1350 − 1290.5 = 59.5 kg

**Answer:**
59.5 kg

**Key Insight:**
The formula New Average = (nA − x)/(n−1) is simply a rearranged version of the sum-based approach used here.

---

### Example 5

**Problem:**
The average age of a class of 40 students is 15 years. When the teacher's age is included, the average becomes 16 years. Find the teacher's age.

**Approach:**
Compute total age before and after including the teacher.

**Solution:**
Total age of students = 40 × 15 = 600
Total age including teacher (41 people) = 41 × 16 = 656
Teacher's age = 656 − 600 = 56 years

**Answer:**
56 years

**Key Insight:**
Adding one new value shifts the total count to n+1 — always recompute the total using the new count.

---

### Example 6

**Problem:**
A car travels 120 km at 40 km/h and returns the same distance at 60 km/h. Find its average speed for the whole journey.

**Approach:**
Since the distance is equal in both directions, use the equal-distance average speed formula.

**Solution:**
Average speed = 2ab/(a+b) = (2 × 40 × 60)/(40+60) = 4800/100 = 48 km/h

**Answer:**
48 km/h

**Key Insight:**
Never use the simple average (a+b)/2 for equal-distance journeys — it gives an incorrect, inflated result.

---

### Example 7

**Problem:**
The average of 11 numbers is 35. The average of the first 6 numbers is 32, and the average of the last 6 numbers is 37. Find the 6th number.

**Approach:**
The 6th number is common to both the "first 6" and "last 6" groups, so it is counted twice when both sub-sums are added.

**Solution:**
Sum of all 11 = 11 × 35 = 385
Sum of first 6 = 6 × 32 = 192
Sum of last 6 = 6 × 37 = 222
Sum of first 6 + last 6 = 192 + 222 = 414
6th number (counted twice) = 414 − 385 = 29

**Answer:**
29

**Key Insight:**
In overlapping-group average problems, identify the overlapping term and subtract the total sum from the combined sub-sums to isolate it.

---

### Example 8

**Problem:**
The average marks of 30 students in a class is 60. The marks of one student were wrongly recorded as 84 instead of the actual 48. Find the correct average.

**Approach:**
Adjust the total sum by removing the incorrect value and adding the correct one.

**Solution:**
Original (incorrect) sum = 30 × 60 = 1800
Correct sum = 1800 − 84 + 48 = 1764
Correct average = 1764/30 = 58.8

**Answer:**
58.8

**Key Insight:**
Correction problems require adjusting only the total sum by the difference between the wrong and correct values, not recalculating from scratch.

---

### Example 9

**Problem:**
A batsman scores 87 runs in his 17th inning and thereby increases his average by 3. Find his average after the 17th inning.

**Approach:**
Let the average after 16 innings be x. Use the relation for the average after the 17th inning.

**Solution:**
(16x + 87)/17 = x + 3
16x + 87 = 17x + 51
x = 36
Average after 17th inning = x + 3 = 39

**Answer:**
39

**Key Insight:**
Set up the equation using the average **before** the new observation as the unknown — this is the standard technique for "increases average by" problems.

---

### Example 10

**Problem:**
The average of 5 consecutive odd numbers is 61. Find the largest number.

**Approach:**
For an odd number of consecutive terms, the average equals the middle term.

**Solution:**
Middle term = 61, so numbers are 57, 59, 61, 63, 65
Largest number = 65

**Answer:**
65

**Key Insight:**
For any set of consecutive numbers (odd or even count), if the count is odd, the average equals the middle term directly.

---

## 5. Practice Problems

### Problem 1 (Easy)
Find the average of 8, 12, 16, 20, and 24.

### Problem 2 (Easy)
Find the average of the first 15 odd numbers.

### Problem 3 (Easy)
The average of 4 numbers is 25. If one number is removed, the average becomes 22. Find the removed number.

### Problem 4 (Medium)
The average weight of 25 students is 52 kg. When one student leaves, the average becomes 51.5 kg. Find the weight of the student who left.

### Problem 5 (Medium)
The average age of a family of 6 members is 22 years. If the youngest member is 8 years old, find the average age of the family at the time of birth of the youngest member.

### Problem 6 (Medium)
A car covers a certain distance at 50 km/h and returns over the same distance at 30 km/h. Find the average speed for the whole journey.

### Problem 7 (Medium)
The average of 9 numbers is 50. The average of the first 5 numbers is 54, and the average of the last 5 numbers is 48. Find the 5th number.

### Problem 8 (Hard)
The average marks of 40 students is 65. Marks of one student were wrongly recorded as 92 instead of the actual 62. Find the correct average.

### Problem 9 (Hard)
A batsman scores 98 runs in his 20th inning and thereby increases his average by 2. Find his average after the 20th inning.

### Problem 10 (Hard)
The average of 7 consecutive even numbers is 40. Find the smallest number.

---

## 6. Answers and Explanations

### Problem 1

**Answer:**
16

**Explanation:**
Sum = 8+12+16+20+24 = 80
Average = 80/5 = 16

**Shortcut:**
None; direct calculation.

---

### Problem 2

**Answer:**
15

**Explanation:**
Average of first n odd numbers = n = 15

**Shortcut:**
Direct formula application.

---

### Problem 3

**Answer:**
34

**Explanation:**
Original sum = 25 × 4 = 100
Remaining sum (3 numbers) = 22 × 3 = 66
Removed number = 100 − 66 = 34

**Shortcut:**
None; sum-difference method.

---

### Problem 4

**Answer:**
64 kg

**Explanation:**
Original total = 25 × 52 = 1300
Remaining total (24 students) = 24 × 51.5 = 1236
Weight of student who left = 1300 − 1236 = 64 kg

**Shortcut:**
None; sum-difference method.

---

### Problem 5

**Answer:**
16.8 years

**Explanation:**
Total age of family now = 6 × 22 = 132
Total age of the other 5 members now (excluding youngest) = 132 − 8 = 124
8 years ago, each of these 5 members was 8 years younger: total then = 124 − (5×8) = 124 − 40 = 84
Average age at that time = 84/5 = 16.8 years

**Shortcut:**
None; requires careful accounting of years elapsed for each member.

---

### Problem 6

**Answer:**
37.5 km/h

**Explanation:**
Average speed = 2ab/(a+b) = (2×50×30)/(50+30) = 3000/80 = 37.5 km/h

**Shortcut:**
Direct formula application for equal-distance journeys.

---

### Problem 7

**Answer:**
60

**Explanation:**
Sum of all 9 = 9 × 50 = 450
Sum of first 5 = 5 × 54 = 270
Sum of last 5 = 5 × 48 = 240
Sum of first 5 + last 5 = 270 + 240 = 510
5th number (counted twice) = 510 − 450 = 60

**Shortcut:**
Identify the overlapping term and subtract total sum from combined sub-sums.

---

### Problem 8

**Answer:**
64.25

**Explanation:**
Original sum = 40 × 65 = 2600
Correct sum = 2600 − 92 + 62 = 2570
Correct average = 2570/40 = 64.25

**Shortcut:**
Adjust only by the difference (92−62 = 30) subtracted from the original sum: 2600−30=2570.

---

### Problem 9

**Answer:**
60

**Explanation:**
(19x + 98)/20 = x + 2
19x + 98 = 20x + 40
x = 58
Average after 20th inning = 58 + 2 = 60

**Shortcut:**
None; standard "increase in average" equation.

---

### Problem 10

**Answer:**
34

**Explanation:**
For 7 consecutive even numbers, the average equals the middle (4th) term = 40.
Numbers: 34, 36, 38, 40, 42, 44, 46
Smallest number = 34

**Shortcut:**
For an odd count of consecutive terms, average = middle term; count outward from there.

---

## 7. Common Mistakes

**Mistake:** Forgetting to convert averages back into sums before adding or removing a value.
**Why it happens:** Students try to manipulate averages directly instead of working through totals.
**How to avoid it:** Always compute Sum = Average × Count as the first step in any inclusion/exclusion problem.

**Mistake:** Double-counting (or forgetting to account for) the overlapping term in "first n and last n" average problems.
**Why it happens:** Not recognizing that one term appears in both sub-groups.
**How to avoid it:** Explicitly identify which term is shared between the two groups and subtract the total sum from the combined sub-sums to isolate it.

**Mistake:** Using the simple average (a+b)/2 for average speed when distances (not times) are equal, or vice versa.
**Why it happens:** Not distinguishing between the two different average speed scenarios.
**How to avoid it:** Always check whether the problem states equal **distances** (use 2ab/(a+b)) or equal **times** (use (a+b)/2).

**Mistake:** Sign errors when correcting a wrongly recorded value (adding instead of subtracting, or vice versa).
**Why it happens:** Confusing which value (wrong or correct) should be added or removed from the total.
**How to avoid it:** Write out explicitly: Correct Sum = Original Sum − Wrong Value + Correct Value.

**Mistake:** Assuming the average of several group averages equals the overall average, even when group sizes differ.
**Why it happens:** Treating group averages as directly combinable without weighting.
**How to avoid it:** Always use the weighted average formula when group sizes are unequal: (n1a1 + n2a2)/(n1+n2).
