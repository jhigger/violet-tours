import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const items = [
  {
    question: "How do I book a student-led tour?",
    answer: `Simply navigate to our "Tours" section, select your preferred tour theme, date, and time, then follow the prompts to complete your booking. You'll receive a confirmation email with all the details.`,
  },
  {
    question: "What makes student-led tours different?",
    answer:
      "Our tours are led by knowledgeable college students who bring a fresh, vibrant perspective to NYC's landmarks and hidden gems. They share personal anecdotes, lesser-known facts, and a youthful insight into the city's culture.",
  },
];

const Faqs = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto space-y-16 md:max-w-4xl">
        <div className="w-full text-center">
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="font-semibold md:text-lg">
            Looking for more info? Here are some things we&apos;re commonly
            asked
          </p>
        </div>
        <Accordion type="multiple" className="w-full">
          {items.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="w-full"
            >
              <AccordionTrigger className="md:text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
