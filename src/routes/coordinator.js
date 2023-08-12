export const goToLoginPage = (navigator) => {
    navigator('/');
};

export const goToSignupPage = (navigator) => {
    navigator('/signup');
};

export const goToFeedPage = (navigator) => {
    navigator('/feed');
};

export const goToRecipeDetailPage = (navigator, id) => {
    navigator(`/recipe/${id}`);
};

export const goToRecipe = (navigator) => {
    navigator('/add-recipe');
};
