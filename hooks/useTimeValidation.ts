export function useTimeValidation(timePairs: any[], date: string) {
  const errors: string[] = [];

  if (!date) {
    errors.push("A data deve ser preenchida.");
  } else {
    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) {
      errors.push("Data inválida.");
    }
  }

  timePairs.forEach((pair, index) => {
    const { entrada, saida } = pair;

    if (!entrada || !saida) {
      errors.push(`Par ${index + 1}: horários não podem ficar vazios.`);
      return;
    }

    if (entrada === saida) {
      errors.push(`Par ${index + 1}: entrada e saída não podem ser iguais.`);
      return;
    }

    const [eh, em] = entrada.split(":").map(Number);
    const [sh, sm] = saida.split(":").map(Number);

    const entryMinutes = eh * 60 + em;
    const exitMinutes = sh * 60 + sm;

    if (entryMinutes > exitMinutes) {
      errors.push(`Par ${index + 1}: entrada deve ser menor que a saída.`);
    }
  });

  const errorMessage = errors.join("\n");

  return {
    isValid: errors.length === 0,
    errors,
    errorMessage,
  };
}
