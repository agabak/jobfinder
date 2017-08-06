(function () {
  'use strict'

  angular.module('madeleka')
         .service('practiceService',practiceService);
    var practices = [
           {'title':'Corporate',
           "description":"Madelekas Advocates Corporate Practice offers a wide range of services from the registration of companies (private limited, non - governmental organizations inter alia) to acting as company's secretary to ensure our client's compliance obligations are satisfied."
                        + "Drawing on our experience in private sector corporate management, the firm advises on wide range of corporate legal affairs such as ; listing in the stock market, securitization; due diligence, corporate investment, pension and employment issues, mining, energy, utilities, telecommunication, environment and Tax management."
           },
           {
             "title":"Finance and Banking",
             "description":"Madelekas Advocates has experience dealing with complex transactions for borrowers, lenders, issuers, lead managers, trustees, debt collectors, syndicated lending, assignments, international trade and finance. The firm's well resourced legal team ensures prompt and effective results when handling client's finance and banking transactions in Tanzania's rapidly growing financial sector."
           },
           {
             "title":"Labour and Employment",
             "description":"Madelekas Advocates has pooled together legal competence, public management skills and corporate management experience to come up with sophisticated practice that matches the requirements of our times. Its track record in handling employment and labour issues."
           },
           {
             "title":"Intellectual and Real Estates",
             "description":"Identified as an area of continuing growth, Madelekas Advocates quickly adapted to provide for our client's industrial and intellectual property law needs. We deal with trade and service marks registration and renewals, unlawful interference with copyright issues, conveyances, and mortgages and leasing arrangements, inter alia."
           },
           {
             "title":"Tax and Commercial",
             "description":"From its inception , Madelekas Advocates has maintained its dedicated, distinctive, and swift approach to draft all commercial contracts, conducting business negotiations, and representing clients in commercial transactions. Its partners special expertise of Tax and Taxation system, makes it a reliable first option for delicate commercial transactions. Madelekas Advocates possesses both the legal skills and commercial background necessary to effectively handle complex business transactions and advice on delicate commercial arrangements."
           },
           {
             "title":"Litigation and Arbitration",
             "description":"Madelekas Avocates' team of accomplished litigators have successfully represented their clients in a multitude of diverse cases affirming Madelekas Advocates as a leader in areas of commercial and business litigation, mediation and arbitration. Our clients have included major international, multinationals and individual entrepreneurs and all benefit from Madelekas Advocates' personal touch and attention to details."
           },
           {
             "title":"Matrimonial, Family and Adoption",
             "description":"One of the areas of practice in Madelekas Advocates is matrimonial and adoption Laws. The firm advises and represents various international and domestic clients on the Adoption process in Tanzania."
           },
           {
             "title":"Privatisation, Competition and Regulation",
             "description":"In the changing economic trends in Tanzania, Madelekas Advocates compiles vast experience of its partners in implementing and advising corporations and multinational companies to effectively cope with the market requirements."
           },
           {
             "title":"Immigration Law, and Citizenship Law",
             "description":"We represent corporate and individuals clients immigration 	matters. In today’s environment of complex and ever-changing 	immigration laws, our goal is to fully understand our clients’ needs 	and to provide to them with the most up to date and efficient 	strategy to address their specific need. Our goal is also to protect 	our clients from liability and to ensure that our clients are legally 	compliant with Immigration Laws. We strive to make the whole 	process as transparent as possible and to fully educate our clients 	of the changing legal 	environment."

                           + "Citizenship law is complex and sophisticated law which needs 	acquainted lawyers to address the same Madelekas 	Advocates has 	team full of knowledge, experience and 	expertise sufficient to bring 	practical solutions for your needs in this area of law."
                           +	"Madelekas Advocates has built a reputation of maintaining high 	standards of quality and thoroughness in our work. We 	take pride 	in providing quality services and having a high approval rate for 	all our clients."
           }

       ];

         var experience = {
             "title":"Our Relevant Experience",
             "description":"At Madelekas Advocates we have a vast experience on a wider cross section of legal transactions both past and present. Much as we have grouped our practice in categories, we always assemble experts from all practice area to work on individual client specific need. Our partners have individually accomplished a lot in our areas of practice. We include below few example of our recent  and current corporate and commercial experience.",
             "experienceList":[
               {"paragraph":"Representing clients in a number of Labour disputes, mediation, arbitration and litigation proceedings."},
               {"paragraph":"Advising a number  of game and hunting companies."},
               {"paragraph":"Providing legal services to the East and Social Security Association."},
               {"paragraph":"Advising and representing corporate clients such as Conpet Food Products Limited in Tax litigation."},
             ]
         }
         function practiceService() {
           var service = this;
           service.getPractices = function () {
             return practices;
           }
           service.getExperiences = function () {
             return experience;
           }
      }
})();
