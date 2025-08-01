type ResponseValue = string | (() => string);

interface Rating {
  target: string;
  rating: number;
}

const Chatbot = {
  defaultResponses: {
    "hello hi": `Hello! How can I help you?`,
    "how are you": `I'm doing great! How can I help you?`,
    "flip a coin": function (): string {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? "Sure! You got heads" : "Sure! You got tails";
    },
    "roll a dice": function (): string {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      return `Sure! You got ${diceResult}`;
    },
    "what is the date today": function (): string {
      const now = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[now.getMonth()];
      const day = now.getDate();
      return `Today is ${month} ${day}`;
    },
    thank: "No problem! Let me know if you need help with anything else!",
  } as Record<string, ResponseValue>,

  additionalResponses: {} as Record<string, ResponseValue>,

  unsuccessfulResponse: `Sorry, I didn't quite understand that. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!`,

  emptyMessageResponse: `Sorry, it looks like your message is empty. Please make sure you send a message and I will give you a response.`,

  addResponses(additionalResponses: Record<string, ResponseValue>): void {
    this.additionalResponses = {
      ...this.additionalResponses,
      ...additionalResponses,
    };
  },

  getResponse(message: string): string {
    if (!message) {
      return this.emptyMessageResponse;
    }

    const responses: Record<string, ResponseValue> = {
      ...this.defaultResponses,
      ...this.additionalResponses,
    };

    const { ratings, bestMatchIndex } = this.stringSimilarity(
      message.toLowerCase(),
      Object.keys(responses)
    );

    const bestResponseRating = ratings[bestMatchIndex].rating;
    if (bestResponseRating <= 0.3) {
      return this.unsuccessfulResponse;
    }

    const bestResponseKey = ratings[bestMatchIndex].target;
    const response = responses[bestResponseKey];

    if (typeof response === "function") {
      return response();
    } else {
      return response;
    }
  },

  compareTwoStrings(first: string, second: string): number {
    first = first.replace(/\s+/g, "");
    second = second.replace(/\s+/g, "");

    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;

    const firstBigrams = new Map<string, number>();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      firstBigrams.set(bigram, (firstBigrams.get(bigram) ?? 0) + 1);
    }

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.get(bigram) ?? 0;
      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
  },

  stringSimilarity(
    mainString: string,
    targetStrings: string[]
  ): { ratings: Rating[]; bestMatchIndex: number } {
    const ratings: Rating[] = [];
    let bestMatchIndex = 0;

    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = this.compareTwoStrings(
        mainString,
        currentTargetString
      );
      ratings.push({ target: currentTargetString, rating: currentRating });
      if (currentRating > ratings[bestMatchIndex]?.rating) {
        bestMatchIndex = i;
      }
    }

    return { ratings, bestMatchIndex };
  },
};

export default Chatbot;
