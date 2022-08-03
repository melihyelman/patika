export const dietLists = {
    blue: {
        breakfast: "2 egg brown bread sandwich, Green chutney, 1 cup milk, 3 cashews, 4 almonds, 2 walnuts",
        lunch: "1 cup arhar dal, 1 cup potato curry, 3 chapatti, 1/2 cup rice, 1/2 cup low fat curd, Salad",
        dinner: "1.5 cup chicken curry, 3 chapatti, Salad",
    },
    green: {
        breakfast: "3/4 cup hot whole-grain cereal, 1 small banana, Calorie-free beverage",
        lunch: "Tossed salad, 1 whole-wheat dinner roll, 1 1/2 teaspoons butter, 1/2 cup cubed pineapple, Calorie-free beverage",
        dinner: "3 ounces seared scallops in 1 teaspoon olive oil, Garlic mashed cauliflower potatoes, 1/2 cup beets, Calorie-free beverage",
    },
    orange: {
        breakfast: "Cooked oatmeal with walnuts, 1 small banana, Skim milk",
        lunch: "Low-fat plain yogurt with flaxseed and peach halves, Melba toast crackers, Raw broccoli, Cauliflower, Low-fat cream cheese",
        dinner: "Salmon, Green beans with almonds, Salad greens with low-fat salad dressing and sunflower seeds, skim milk and an orange",
    },
    red: {
        breakfast: "Brown rice idli, Sambhar, A spoonful of coconut chutney/two whole eggs, one toast with unsweetened tea/coffee",
        lunch: "One whole-grain chapati, Mixed vegetable curry, A bowl of salad/one whole-grain chapati turned into a tortilla with chicken stuffing",
        dinner: "One large bowl of soup with sautéed tofu/paneer/chicken",
    },
}

export const bmiResults = [
    {
        type: 'Underweight',
        description: 'We recommend working with a dietitian to gain a healthy weight.',
        bgColor: 'blue',
        color: 'white',
        img: '/images/underweight.jpg',
        max: 18.5,
        min: -99999999,
    },
    {
        type: `You are healthy!`,
        description: 'Congratulations! Maintain a well-balanced and consistent diet.',
        bgColor: 'green',
        color: 'white',
        img: '/images/normal.jpg',
        max: 24,
        min: 18.5,
    },
    {
        type: 'Excess Weight',
        description: 'We observed that he was overweight compared to his height. We recommend that you get rid of excess weight with a suitable diet.',
        bgColor: 'orange',
        color: 'white',
        img: '/images/excess-weight.png',
        max: 29.9,
        min: 24,
    },
    {
        type: 'Obesity',
        description: 'We observed that the weight was at a level that could pose a risk to health. We recommend that you lose weight with the help of a dietitian.',
        bgColor: 'red',
        color: 'white',
        img: '/images/obesity.jpg',
        max: 34.9,
        min: 29.9,
    },
    {
        type: 'Extremely Obesity',
        description: 'We observed that the weight was at a level that could pose a risk to health. We recommend that you lose weight with the help of a dietitian.',
        bgColor: 'red',
        color: 'white',
        img: '/images/extremely-obesity.jpg',
        max: 999999999,
        min: 34.9,
    },
]