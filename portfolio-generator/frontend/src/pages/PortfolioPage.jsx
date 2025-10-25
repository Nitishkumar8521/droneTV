import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";

export default function PortfolioPage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/portfolios");
      const found = res.data.find(p => p.id === Number(id));
      setProfile(found);
    };
    fetchData();
  }, [id]);

  if (!profile) return <div>Loading...</div>;
  return profile.template === "1" ? <TemplateOne profile={profile} /> : <TemplateTwo profile={profile} />;
}
