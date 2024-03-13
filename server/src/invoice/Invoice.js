import { jsPDF } from "jspdf";

export const generateInvoices = (products, quantities, rates) => {
  var doc = new jsPDF();
  var img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAJcAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCACOAdoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2WiiigAooooAKKp3Gq2VrJ5dxcxo+M4JqL+3tM/5/I/zrN1YJ2bRapzaukzQoqn/a9l/z8L+Ro/tey/5+F/I0e1h3X3i5JdmXKKp/2vZf8/C/kaP7Xsv+fhfyNHtYd194ckuzLtFUv7Xsv+e6/rUsF9b3LFYZVdgMkCmqkHomgcWuhYoooqyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqG5nS2gkmkOEjXJNTVynjLU9qJYRty/zSY9Ow/GufE1lRpubN8PRdaooI5a9unvryW4k6u3A9BUK/fX6ikpV++v1FfIyk5Nt9T65QUY8q2R0FFFFFzywoooouAVPZ3BtLpJR0BwR6ioKKqM3CSkt0KUVJNPZncI6yIrqcqRkGnVj6Bd+ZAYGPzJ93PpWxX11Csq1NTR4VSDhJxYUUUVsQFFFFABRRXjfhr4k+INT+JMejXM0BsmupYyohAO1d2OfwFAHslFFFABRRRQAUUUUAFFFFABRRRQAUUVyPxI8WXPg/wANC8sole5mmEMbOMqmQTk+vTpQB11FeZ/Cv4hal4tvLyx1ZImkhj85JY128ZAII/Ec16ZQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUV4d4l+Mmt2Hiq6trGG3SztZzF5UkeWk2nByc8Zx2r2fTb0ajplreBCgniWTaeoyM0AWqKKKACiiigAooooAKKKKACiiigAooooAKKKKAIrm4S1tpJpDhI1LE15hfXb317LcSfeduB6DtXUeM9T2xpYRnlvnkx6dh+NchXzua4jnn7NbI+iynD8sHVe729ApV++v1FJWhoNp9t1NcjMcJDOffsK8uEXKSSPSrVFTg5PoaWD6H8qMH0P5V2wiTA+Vfyo8pP7i/lXtf2O/wCY+c+v+RxOD6H8qMH0P5V23lJ/dX8qRok2n5F6elJ5Q/5g+vLscTkeo/OjI9R+dZesWz2OpvHltknzoc9R3H4VT3t/eP5140rxdmezToKpFST0Z01ldfZLpJQRweRnqK7FHWRA6nIYZBryje394/nXaeD9TM9q1nI2Xi5XJ/hr1sqxFpOk9nscGY4Nxj7RO9tzpqKKK+gPECiiigAr5w8Ff8lph/6/p/8A2evo+vnDwV/yWmH/AK/p/wD2egD6PooqvfX1vpljNeXkqxW8Kl3c9ABQBYorwrWfip4j8U6p/Z/hG3lgjJwnlJumcepPRR/nNRf8If8AE50+0m8uw/XYb35vyzigD3qivBNJ+J3ifwlq4sfFMU1xEpAkSZdsqj1Vh1H559a9ysL+31OwhvLOQSW86B0YdwaALNFeIfEfxT4o8JeNWS31Wf7DLtnhjIXbt7r06ZBFex6VqEWr6Va39ucxXMSyL+IzQBcoorA8a6+PDfhO/wBRDASpHth93bhf1OfwoA36oato9jr+nSWOp263FtJ1VvX1BHQj1FeafB/WvEfiXUry71XVJ57K2QIEYLhnb6DsAfzrsviPqV5pHgTUb3T52t7mIRlJFxkZkUHr6gkUAXvDvhHR/CscqaPaCHzT87FizN7ZPb2rarzX4NeItV8Q2GqSaveyXTRSxqhcAbQQc9PoKv8AxKXxc32D/hETOPv+f5RUemM7vxoA4f4veJdY0/xqLGz1O6t7UwRt5cUpUEnOele2WJJ0+3JJJMSkk/SvlnxaNfGuAeJjKdR8tceYRnb26cetdpDF8WfJj8lr7ZtG3DRYx2oA95orz74bL40W+vf+EuNwYfLXyfNKH5s8/d9q6Pxd4tsPB+lG9vizMx2xRJ96RvQen1oA3qK+f5PHHjvxzePHoUc0MI6x2gwFH+057/l9Kc3hb4n2S/aUuL52HOEu9x/LNAHv1FeN/D74p6hJrcWh+JjueV/KjnZdjrJ02sPc8fWvY2ztOOuOKAMjxbdTWXhLVLm2kaKaK2d0deqkDrXmnwU1zU9Z1vVDqeoXN2UgXb50hbHzds1jeII/iZ9j1A3zXn9m4fzMmPHl/hzjFcv4JXxS11df8IkZhNsHneUVHy54+970AfUlFeE+V8Xf71//AN9RV7Zpn2gaXa/bN32nyk83PXdjnp75oAwdT+HXhvV9X/tO905ZLokMxDsFcjuVBwf610yqqIFUBVAwAB0rxDxx408QaZ8SpNOs9UmhtBLEoiULgAhc9vc17iOg+lABRVLV9Vs9D0ye/wBQlEVvCu5j3PsPUn0rw/V/il4o8V6mbLwzDLbRscRxwJulYepbt+GMetAHvtFfPv8AwjPxPx9o8zUd/Xb9r5/LdU2j/FTxN4W1MWXiaGW5iU4kSZNkqj1B7/jnPrQB75RVLSdUtNb02G/sJRLbzLuVh/I+h9qu0AFFeF+DfiDqz+OpY9b1lzpsInZ1k2hcKDjt7VJf+MfGvjy+lXwpbXFtpqNtDxgKT/vOe/sOlAHuFFfPd7ovxL0GNr2S41BkQbmaO48zaP8AdzXXfDH4oXOu3q6NrhVrllJguANvmY6qw9cc5FAHq1FFFABUN1PHa28k0hwka5JqauT8Z6ltRLGNuW+aTHp2Fc+JrKjTc2b4ai61RQRy97dvfXstxJ96Rs49BUFFMkkWJCx//XXyEpOcm3uz7CMVCKitEhs8vlgBeXPAFdtoGn/2bp0aMP3rnfIfUn/CuV8M2Dalqv2iUZjg+bnuew/rXeDqPrXVSjytHj4+vzPkWyNgdBRQOgor6xbHgBSP9w/SlpH+4fpRLYDkPEmnG/05mjH76E70I7+o/GuQhlEqZ6MOCPSvRvWuA1+yOlaszxjEMvzL6e4r5KrC59BgK/K+R7DKt6Zetp1/FcLnCnDD1HeqUbrIgZehp1c8JuEk1uj1pwU4uL1TPV4pFmiSRDlWAIIp9cz4O1Pz7VrORvni5XP92umzX2GHqqtTU0fHV6To1HB9BaKKK2Mgr5w8Ff8AJaYf+v6f/wBnr6Pr5w8Ff8lph/6/p/8A2egD6PryP48a7JBZWGjwsVW4JmlweoU4A/PJ/CvXK8A+OpY+M7YHO0Wi4/76NAHoPwh8OQ6N4Ot70ov2vUB5skhHOw/dX6Y5+prvq+ftM8O/EmTTLV7C5ultGiUwqt0AAuOOM+lWv+EZ+Kn/AD+Xf/gYP8aAOx+Nehw3/g46l5Y+02EikPjnYx2kfTJB/Cq/wK1OS68K3dlIxYWdx8meyuM4/ME/jXIXfgv4lahaSWt5NPNBIMPG90pDd/X1ArufhF4S1XwpaamurwpE1w8ZjAcN90Nnp9RQBD8bdA/tHwrHqca5m098sQOsbcH9cGovgdr/ANu8NT6TM+ZbGTcgJ/5Ztz+jZ/MV6NqNjFqWn3FncDMVxG0bj2IxXzz4FvpfBPxOFndtsQytZT5OBgnAP0yAaAPo+vFvjzr26ew0OJuEH2mYA9zwo/LJ/EV7NLKkETyyMFRFLMx6ACvnLT43+IvxY8yUM0E1wZHB/hhToPyAH40AeyfDTQf+Ef8ABNlC67Z51+0S/VucfgMCovi1/wAk01b6R/8Aoxa7AAKAAMAdhXH/ABa/5Jpq30j/APRi0Acp+z//AMgvWf8ArtH/AOgtXrleR/s//wDIL1n/AK7R/wDoLV65QB88/Gn/AJKKP+veL+Zr37T/APkHW3/XJP5V4D8af+Sij/r3i/ma9+0//kHW3/XJP5UAWKxfFHhex8W6Q+n34YKSGSRMbo2HcZrarnvGPjCx8HaT9rvcySSHbDCp5kb+g96ANPR9HstC02Kw06BYYIxgADkn1J7k+tWp7iK2haW4lSKNRlmcgAV4SPHXj7xrO66BA8EKnBFrGML9Xb/61SL8KvG2vSA65qQSM8nzrkykf8BHGaAOa8batZaj8Sp7/SXUw+fGVkTgMy4ywPuRnNfTS/dH0r5d8W+GofCfjJNLhnedYxExdxgknBP4V9RJ9wfSgDD8b/8AIk6z/wBekn8q8r+AH/IZ1b/r3T/0KvVPG/8AyJOs/wDXpJ/KvK/gB/yGdW/690/9CoA9xooooA+cviP/AMldl/67wfyWvo0fdFfOXxH/AOSuy/8AXeD+S19Gj7ooA8U+POuyNeWGiRuREqfaJVHck4X8sH867j4X+FoPD3hO1lMYF7doJZnI555C/QDFeTfGYsfiJMH+6IIsfTH/AOuvoPTABpVoF6CFMf8AfIoAs1xHxT8Lwa/4SubhYh9tsUM0UmOcDll+hGT9RXb1T1hVOiX4b7pt5M/TaaAPI/gLrsnnahokrkx7PtMQP8JzhvzyPyr2ivnX4Kkj4hxBfumCXP5f/qr6KoA+ULDSG13xrHpqkr9pvDGWHZd3J/AZNfUmnada6TYQ2djEsVvCoVFUdP8A6/vXz38N1D/F61BHSec/+OPX0fQAV82a1Cvh34xutmAiRahG6KOwba2Pp8xFfSdfN/jv/ks1z/1+W/8A6ClAH0hRRRQBDdXCWttJNIcJGu4mvMr67e+vZZ5PvSNnHoO1el31ql7aSwSDKuuDXmN1bPaXUkEgw0bbfrXh5w52j2PbydQvJ9f0ISQASTgDk1nyyNcSAKCcnCqO9aDqHBU9D1rOdXtpgynBB3K1ePSt8z2Kt7aHomiacNM0yOLA8wjc59Sf84rRHUfWqOk6gNS06KcY3EYcejDrV4dR9a6o7o+dqXu77mwOgooHQUV9StjzgpH+4fpS0j/cP0olsBj+tZXiHTf7S011UfvY/nT3Pp+NavrWbruojTNNkkB/eMNiD3P+c18q9z0qd+Zcu55/bzGF8HO0nBHpV8EEAjoaz4IjcSHOcZyxrQACgAdAMCuapa/mfRUr21LemXradqEVwvRThh6jvXpsMqzRLIhyrDINeX2Fo9/exW6dXbk+gr0+2gW2t44UGFRdoFe1k7nyy7HiZwoc8WtyWiiivaPGCvnDwX/yWmH/AK/p/wD2evo+vnbxn4e1jwT44k1mwhfyGuDcW86ruUEnJVvTqePQ0AfRNeL/AB70l/O0zVUXKbWgcj16j+tbPw6+JOq+L/ED2OoWcMUK25cPEjDLgjqT7E8V3niDQrTxJo1xpt8uYphjI6q3Zh7g0Ac78Kdeh1nwRZxK+biyUW8q55GPun6EY/Wu1r5yu/DHi/4baw13pwnaEHAubdd6SL6Ov9D+BrST44eJY4/Ll0+zaUcbjG4/TNAHtWua3Z+HtJm1HUJClvCMnAyT7AdzSaHr+n+I9PW80q4WeEnBI4Kn0I7GvB5IvG3xSv4kuI5Baq2QShjgi9/c/ma9w8J+G7XwpoMOm2nzbMtJIRzI56sf5fQCgDarwb446E1h4ktdZhUql6m12HaRP8Vx+Rr3muS+Jnh4+IvBV5DEhe5gHnwgDJLL2H1GR+NAHLeI/HguPg1BeJIPtl+gtGweQw4c/kP1qH4D6B5Nhfa3KvzTt5EJI/hHLH8TgfhXksema1cpDZC0vmj8z93GY32hmwM+2eOa+ovDejx6B4dsdNjAxbxBWOOrdz+JzQBqVx3xa/5Jpq30j/8ARi12Nch8VIpLj4dapFDG8kjCPCopJP7xewoA5L9n/wD5Bes/9do//QWr1yvKPgRa3Fpp2sC5glhLSxkCRCueG9a9XoA+efjX8vxDBPA+zRH9TXvumsH0u0ZTlWhQg+vyivNfjF4HvNdFvrGlRGe4t08qaFRlmTOQR64JPHvXE6L8VvEvhvTo9Nkto51hGyP7RGwdR2Hvj3oA+ia8F+PE8r+KbGFs+VHa5Ue5Y5/kK6n4Z+KvFfiLxBdTavbSHTZIvlYReXHE46bc8nIJ9avfFjwNceKbCC901d9/aAgR55lQ8kD3zQB03guytrDwfpcVkqiI26PlR94kZJPqSa3a+efDnxK8Q+CLUaXe6cbiCHKpHOGjeP2B9PwrWufH3jHx2P7L0LS/siTDbJLHkkKeuXPCj9aAOW+IOrRaz8Srq4t2DRJMkKsDwwTC5/MGvphPuD6V89+OPhdeeGbKwu9MjmuwseLt4wWKy5zuA7L2/Cu6+HHjzXPEurNY6tYLFFHb7hMsTLucEdc8dM8UAdf42BPgnWQBn/RJP/Qa8o+ATqNe1VM/MbZSB7Bv/rivbbu1jvrOe1mGYp42jceoIwf0NfOFzpXiT4Y+Jzc2scgVCRHOIy0UyHsf04OCD+dAH0rRXgFz8YfFurw/ZdPtIoZX+Uvbwsz/AIZzj9a9r8N3F/d+HrKXVoDBfNEPPjbqG7/TPXHvQB4N8R/+Suy/9d4P5LX0aPuivnv4hadeTfFeWWO0uHj86H51iYjovevoQdB9KAPCvjxpEkOu2Oqqp8qeHyWYDgMpyPxwf0r0/wCH2vxeIPB1hcI6mWKMQzKDyrqMf4H8av8Aifw5aeKdFm069BCPyjjqjDowrwp9G8Z/DHVHmsFmaBjjzoU8yKUf7S9j9cEetAH0ZXLfEfXodB8F38juomnjMEKk8szDH6Ak/hXlv/C8fEvl+X/Z9l5397y3/lms+LQvGPxO1VLjUBKsAOPOmTZFEvfavf8ADr60AbPwG0h5dY1DVWU+VBF5CEjq7HJ/ID9a9yrJ8NeH7TwvosOm2IPlx8s56yMerH3Na1AHzh8Nf+Sv23/Xa4/9Aevo+vnn4d6feQfFm2lmtLhI/On+d4mA+4+Oa+hqACvm/wAd/wDJZrn/AK/Lf/0FK+kK+ePHGnXkvxfuJo7S4eI3cBDrGSDhU70AfQ9FFFABXHeM9M2sl9GOvyyY/Q/0rsetV7y0S8tJIJBlXGK5sVQVak4fcdGFruhVU18zyymSxLKhU9eoPpVi6t3tLqSGQYZGx9air5Fpxdnuj69NTjdbMt+FNQNlqJs5TiOY8Z7N/wDX6V3A6j615tPExxInEinIIrutF1Aajp8U/wDGPlcejD/Oa6qUuZo8bH0eR8y2Z046CigdBRX1i2PBCkf7h+lLSP8AcP0olsBj964PxJftqOq+REcxQ/KMdz3P9K6nX9Q/s7TnZT+9f5Ix7n/CuLt4fKGTy56mvkqk+U9/AUOZ872HRRiJAo/E+tPoqxY2b397FbJ1duT6CuaMXOSS3Z68pKEXJ6JHU+DdN8uJ72QcyfKnsK6rvUVvCltbpDGMIigAVLX2GGoqjTUEfH4is61RzfUKKKK3MQprIsilXUMp6gjg06igCOK3igz5MSR567FAz+VSUUUAFQGytS2420Jb1MYqeigBAAoAAAA7CloooAKKKKACiiigAooooAKKKKACoZLS3lbdLBE7erICamooAQAKAAAAOgApaKKAIpbaGfBmhjkx03qD/OnxxpEgWNFRR2UYFOooAKAAOgxRRQAU10WRSrqGU9QRkU6igCKK2ghJMMMaE9SqgfyqWiigAooooAKKKKAIPsVrv3fZod3r5YqeiigAooooAKKKKACiiigAooooAKKKKAOP8Z6bhkvox1+WTH6GuUr1W5t0ubd4pBlWGOa4ya1EEzxOi7lOOlfOZphuSp7RbP8AM93L8b+79m1dr8jna0vDt39j1LyycRTkAj0bsf6Vd8tP7i/lS+WowQqgjkECvNg3GSZ2VqsasHBrc7oEYHNLn3FcT9ol/wCer/8AfVH2iX/nq/8A31Xt/wBrr+U8X6i+522aax+U89q4v7RL/wA9X/76pDcS7D+9fp60PN1/KNYB9zJ1y7+3amxBzHD8iD37mqNB6n60V4UpOTufS0qapwUV0Cux8G6Z5cTX0g5f5Uz6ev41y1haPf3sVsnV25PoK9Ot4EtreOGMYRFCgCvVyrD883Uey2PLzbEcsFSW73JaKKK+iPngooooAKztG12y16CaWwkLrBM0LkrjDL1rRrhPhP8A8gnV/wDsKT/zoA7uiuG1/wAW6zZ+PI9A0u1gna4shJD5mQEk3HLOf7oUE4HJOBUN5rfivwpqGny69Np99pt5cLbyNbRsjws3Q89R9aAO8llSCJ5ZWCoilmY9gK42w8f3eqlLjTPDWo3OmSS7FvAyruGcFgh5xWx4wh1Sfw/cJpM1rE5RvONwpYGPacgY71yXwxi8TyeF9GljvNMGkgEGJom87aHYEZ6ZyDQB6VRXLeLvFF3pN1YaVo1tHc6xqBIhSUkJGo6u2Ow/oayNR1Xxr4Utf7U1V9N1TT4iDcx28bRyRr/eUnqB7/8A16APQKht7mC6Dm3milEbFGMbhtrDqDjofaqV1cXepaCLjQZrdZp0V4ZJ1JTB55A9q82+HkHitrPVTpl5pUcX9qTCcTROxaT5dxXHQHjrQB65RWP4o8QReGNCl1CeNpXUhI416yOeAo/Guckb4hR2J1LzdILhfMOnCNs467d/97HHpmgDu6KyfDWvweI/DtrqsK+WkyEshP3GBwR+BBrlrXX/ABP4wuLmbwybGx0qCVokubpC73DDqQB0FAHf1ip4lhfxjJ4eEEgmjthcmXI2kE4x9areGL/xDLc3lh4jsYkkt8GO8t8iGcH0B5BH+cVyWrXmoWvxknj0i2jnvZ9NWOMytiOPnJdsc4GOg65oA9QorgJ9c8UeFdX00eIJtPvdOv7gWxe3jMbQuenXqOv5V39ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVgeILTDLcqP9lsVv1FcQJcQvG44YYrnxVFVqTia0ajpzUjiqKfNE0ErRuOVOKZXyUouLae57iaaugooopAFIfun6UtIfun6Uho589T9aKD94/WrFjZvfXkVunV25PoKIRcmorqepKShFyeyOp8G6b5cT30g+aT5U9hXU96jt4EtrdIYxhEUACpa+ww9FUaagfH4is61RzYUUUVuYhRRRQAVwnwn/5BOr/9hSf+dd3WdpGh2OhQzRadCYknlaaQF2bLN1OT/KgDlWAPxzTI6aNkf9/Kf8Vv+QDpv/YTt/8A0Kun/sSw/t8a15J+3iD7P5m8/cznGOnXvTtX0Sx123ig1CIyxxSrMgDlcOvQ8UASat/yB73/AK4P/wCgmuc+FX/JNtG/3H/9GPXVzRJcQvFIMo6lWGeoPBqrpGk2eh6ZDp+nxmK1hyEQsWxkknk89SaAON8QzJpXxc0G/vCI7S4tJLVJXPyrJkkDPbOQPxrY+ImoW1h4G1T7S6gzwNFEpPLswwAB361savo1hr1i1nqdslxA3O1x0PqD2PuKw9P+GnhvTb2O7js5JpYjmP7RM8gT0wCSOKANDwZZzaf4N0m1uQRNFaoHB7HFc78LJESw8QIzBWj1icsp/h+71/I/lXe1y2pfDnw7qmqSX9xaSLPK26URTMiyHPUgHk0AZXxhtnl8JwTgyCG2vIpJjH1VM4LD3GadH4Ls5tOF8vi3Wms2Tf5v2wbdvrmu2ltYZrVraWJZIWXYyMMgr0wa5M/Crwv5xYWUwjLbjCLmQR9f7uent0oAt+FtL0228Ei18P3L3FnMkhilc8sWyP51l/CS6iXwgulsype2E0kdxCeGU7ic49DnrXb29vFaQJBbxrFFGoVEUYCgdhXP614B0HXb03l3aul0ww00ErRM31x1/GgDRtPEFhfa3daVbTeZdWiK8wUZVcngZ9fauVtwP+F43RxyNJX/ANCFdVofh3TPDlobbSrVYI2O5zklnPqWPJP1py6FYLrz60IT9veHyGk3nBTrjGcfjQByvxW/48NC/wCwtD/Wu7rO1jQ7HXI7ePUYjKtvMs8Y3suHHQ8devStGgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKk2nWtxIXlhVmPem/2PY/8APuv61czRWUqFNu7ii1UmlZNlP+x7H/n2X9aP7Hsf+fZf1q7RS+r0v5V9we1n3f3lL+x7H/n2X9aP7Hsf+fZf1q7RR9Xpfyr7g9rPu/vMo+GdJ/584/zNT2mjWFjJ5lvbLG5GNwzV7HrR0pxoU07qK+4cq9Rq0pO3qFFFFamYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q=="
  doc.setFontSize(22);
  doc.text("INVOICE GENERATOR", 20, 20);
  doc.addImage(img, "PNG", 140, 10, 60, 20);
  doc.setFontSize(16);
  doc.text("Sample Output should be this", 20, 30);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Product", 25, 60);
  doc.text("Qty", 65, 60);
  doc.text("Rate", 125, 60);
  doc.text("Total", 160, 60);

  doc.setLineWidth(0.1);
  doc.line(20, 65, 180, 65);

  // Calculate the starting y-coordinate for the data rows
  let y = 70;

  // Loop through the arrays and display the data
  for (let i = 0; i < products.length; i++) {
    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.text(products[i], 25, y);
    doc.text(quantities[i].toString(), 65, y);
    doc.text(rates[i].toString(), 125, y);

    const total = quantities[i] * rates[i];
    doc.text(`INR ${total}`, 155, y);

    // Increment y-coordinate for the next row
    y += 10;
  }

  // Add a line after the values of the table
  doc.setLineWidth(0.1);
  doc.line(20, y, 180, y);
  y += 10;

  // Calculate the total, GST, and grand total
  const subTotal = rates.reduce((acc, rate, index) => {
    return acc + rate * quantities[index];
  }, 0);

  const gst = subTotal * 0.18; // Assuming 18% GST
  const grandTotal = subTotal + gst;

  // Display subtotal, GST, and grand total
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0); // Set text color to black
  doc.text("Subtotal", 115, y);
  doc.text(`INR ${subTotal}`, 155, y);
  y += 10;

  // Highlight the field value of GST
  doc.setTextColor(0, 0, 255); // Set text color to blue
  doc.text("GST (18%)", 115, y);
  doc.setTextColor(0); // Reset text color to black
  doc.text(`INR ${gst}`, 155, y);
  y += 10;

  // Highlight the field value of grand total
  doc.setTextColor(255, 0, 0); // Set text color to red
  doc.text("Grand Total", 115, y);
  doc.setTextColor(0); // Reset text color to black
  doc.text(`INR ${grandTotal}`, 155, y);
  y += 10;

  // Add valid till date (3 months from current date)
  const validTillDate = new Date();
  validTillDate.setMonth(validTillDate.getMonth() + 3);
  doc.text(
    `Valid Till: ${validTillDate.toLocaleDateString()}`,
    20,
    y
  );
  y += 10;

  // Add terms and conditions
  doc.setFillColor(0, 0, 0, 0.9); // Set fill color to black with reduced transparency
  doc.setDrawColor(0); // Set draw color to black
  doc.setLineWidth(0.1);
  doc.roundedRect(20, y, 160, 40, 5, 5, "F"); // Draw a rounded rectangle for terms and conditions
  doc.setTextColor(0); // Set text color to black
  doc.setFontSize(12);
  doc.text(
    "Terms and Conditions",
    25,
    y + 5
  ); // Add terms and conditions header
  doc.setFontSize(10);
  const termsContent = "We are happy to supply any further information you may need and trust that you call on us to fill your order, which will receive our prompt and careful attention.";
  const textWidth = doc.getTextWidth(termsContent);
  const xOffset = (250 - textWidth) / 2;
  doc.text(
    termsContent,
    20 + xOffset,
    y + 20,
    { maxWidth: 160 }
  ); // Add terms and conditions content

  doc.save("Invoice.pdf");

  return doc;
};
