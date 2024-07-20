import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";

const ImportantLink = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Link Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Reserva AirBnB
            </span>
            <a
              href="a"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104123121041231210412312104123121041231210412312
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Reserva AirBnB
            </span>
            <a
              href="a"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104123121041231210412312104123121041231210412312
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button
        variant="secondary"
        size="full"
        onClick={() => alert("Oi, Leandro!")}
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
};

export default ImportantLink;
