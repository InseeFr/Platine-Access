import { createFileRoute } from "@tanstack/react-router";
import { EmailForm } from "components/EmailForm";
import { protectedLoader } from "hooks/useAuth";

export const Route = createFileRoute("/$survey/repondant/mail")({
  component: Index,
  beforeLoad: protectedLoader,
});

function Index() {
  const { survey } = Route.useParams();

  return <EmailForm surveyId={survey} />;
}
