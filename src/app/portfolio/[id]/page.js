import PortfoliodetailsMain from "@/components/layout/main/PortfoliodetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";
const portfolio = getPortfolio();
export const metadata = {
  title: "Portfolio Details",
  description: "Portfolio Details",
};

export default async function PortfolioDetails({ params }) {
  const { id } = await params;

  const isExistPortfolio = portfolio?.find(
    ({ id: id1 }) => id1 === parseInt(id)
  );
  if (!isExistPortfolio) {
    notFound();
  }
  return (
    <PageWrapper isInnerPage={true}>
      <PortfoliodetailsMain />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return portfolio?.map(({ id }) => ({ id: id.toString() }));
}
