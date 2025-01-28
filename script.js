function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (!birthdate) {
        result.textContent = 'Please enter your birthdate.';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    const years = today.getFullYear() - birthDateObj.getFullYear();
    const months = today.getMonth() - birthDateObj.getMonth();
    const days = today.getDate() - birthDateObj.getDate();

    let adjustedYears = years;
    let adjustedMonths = months;
    let adjustedDays = days;

    if (adjustedDays < 0) {
        adjustedMonths--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        adjustedDays += prevMonth.getDate();
    }

    if (adjustedMonths < 0) {
        adjustedYears--;
        adjustedMonths += 12;
    }

    result.textContent = `You are ${adjustedYears} years, ${adjustedMonths} months, and ${adjustedDays} days old.`;
}