# Morning Routine — Example Algorithm (Solution)

## Inputs
- time of day
- weather
- school start time
- your energy level

## Algorithm (12 steps, 2 decisions, 1 loop)
1. Wake up when the alarm rings.
2. **DECISION**: IF you feel extremely tired, THEN allow yourself 1 snooze.
3. If snoozing, set a 5-minute snooze timer.
4. **LOOP**: REPEAT “get out of bed” UNTIL both feet are on the floor.
5. Walk to the bathroom.
6. Brush teeth for 2 minutes.
7. Wash face.
8. Get dressed.
9. **DECISION**: IF it’s raining, THEN grab an umbrella, ELSE grab sunglasses.
10. Eat breakfast.
11. Pack backpack (laptop/books/water).
12. Leave home and start the trip to school.

## ASCII Flowchart (simple)

```
   [Start]
      |
  Alarm rings
      |
  Tired?
   /   \
 yes   no
  |     |
 snooze |
  |     |
  +---> Get out of bed
             |
     Feet on floor?
        /     \
      no      yes
      |        |
   try again   |
      |        |
      +--------+
             |
      Brush teeth, wash face
             |
          Get dressed
             |
        Is it raining?
         /        \
      yes          no
       |            |
   umbrella     sunglasses
       |            |
       +-------> Breakfast
             |
          Pack bag
             |
           Leave
             |
           [End]
```

