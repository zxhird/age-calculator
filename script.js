function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (!birthdate) {
        result.textContent = 'Please enter your birthdate.';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
        monthDifference < 0 || 
        (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
}