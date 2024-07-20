import { ArrowRight, UserRoundPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InvitesGuestModal from "./invite-guest-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import Button from "../../components/button";

function CreateTripPage() {
  const navigate = useNavigate();

  const [emailsToInvite, setEmailsToInvite] = useState([
    "jessica.white543@yahoo.com",
    "fulano.black543@yahoo.com",
  ]);
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestModal, setIsGuestModal] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestModal(true);
  }

  function closeGuestsModal() {
    setIsGuestModal(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }

  function emailRemoveInvite(email: string) {
    const newEmailList = emailsToInvite.filter((emaill) => emaill !== email);
    setEmailsToInvite(newEmailList);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-2">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeja sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
          />

          {/* OTHER HERE */}
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span>{emailsToInvite.length} Pessoa(s) convidada(s)</span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-800"></div>

              <Button variant="primary" onClick={openConfirmTripModal}>
                Confimar a viagemd
                <ArrowRight className="size-5 " />
              </Button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planeja sua viagem pela plann.er você automaticamente concorda com{" "}
          <br />
          nosso{" "}
          <a className="text-zinc-300 underline" href="#">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            Politica de Privacidade
          </a>
        </p>
      </div>

      {isGuestModal && (
        <InvitesGuestModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailRemoveInvite={emailRemoveInvite}
          emailsToInvite={emailsToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}

export default CreateTripPage;
