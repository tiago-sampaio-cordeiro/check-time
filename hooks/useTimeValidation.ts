export function useTimeValidation(entry: string, exit: string, date: string) {
  const errors: string[] = [];

  if (!date) {
    errors.push("A data deve ser preenchida.");
  } else {
    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) {
      errors.push("Data inválida.");
    }
  }

  if (!entry || !exit) {
    errors.push("Horários não podem ficar vazios.");
  }

  if (entry === exit && entry && exit) {
    errors.push("Entrada e saída não podem ser iguais.");
  }

  if (entry && exit) {
    const [eh, em] = entry.split(":").map(Number);
    const [sh, sm] = exit.split(":").map(Number);

    const entryMinutes = eh * 60 + em;
    const exitMinutes = sh * 60 + sm;

    if (entryMinutes > exitMinutes) {
      errors.push("Entrada deve ser menor que a saída.");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    errorMessage: errors[0] ?? null,
  };
}
