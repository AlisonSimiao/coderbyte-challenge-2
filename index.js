const { readFile, writeFile } = require('fs/promises');
const HEADER = 0;

function compare(value) {
  if (value == 0 || value == 'no' || value == '')
    return false;

  if (value == 1 || value == 'yes')
    return true

  return value;
}


async function main() {

  try {
    const CSVFile = await readFile('./input.csv', { encoding: 'utf8' });
    const CSVNoMarks = CSVFile.replaceAll("\"", "");
    const CSVFileCutLines = CSVNoMarks.split("\n");

    const keys = CSVFileCutLines[HEADER].split(",");

    const data = [];

    for (let person = 1; person < CSVFileCutLines.length; person++) {
      
      const personValues = CSVFileCutLines[person].split(",");

      const newPerson = {
        group: [],
        addresses: []
      }

      for (let i in keys) {

        switch (keys[i]) {
          case "group":
            const aux = [...personValues[i].split(" / ")];

            newPerson["group"] = [...newPerson["group"], ...aux]
            break;
          default:
            if (keys[i].split(" ").length > 1) {
              if (personValues[i]) {
                const corte = keys[i].split(" ");
                const type = corte[0];
                const tags = corte.slice(1);
                const address = personValues[i];

                newPerson["addresses"].push({ type, tags, address })
              }
              break;
            }

            newPerson[keys[i]] = compare(personValues[i]);
        }
      }

      const founded = data.find((value) => {
        return value.eid === newPerson.eid;
      })

      if (founded) {
        founded.group = [...new Set([...founded.group, ...newPerson.group])];
        founded.addresses = [...new Set([...founded.addresses, ...newPerson.addresses])];
      }
      else
        data.push(newPerson);
    }

    const content = JSON.stringify(data);

    await writeFile("output.json", content);
  } catch (err) {
    console.log(err);
  }
}

main();